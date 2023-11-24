import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import DstaPostMenuModal from './DstaPostMenuModal';
import axios from 'axios';
import DstaDetail from './DstaDetail';


SwiperCore.use([Navigation, Pagination]);

export default function DstaMainModal({ closeModal, selectedPostNumber }) {

  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [isCommentEntered, setIsCommentEntered] = useState(false);
  const [like, setLike] = useState(false);
  const [commentLike, setCommentLike] = useState(false);
  const [dstaModal, setDstaModal] = useState([]);
  const [commentLikes, setCommentLikes] = useState(Array(dstaModal.length).fill(false));


  //댕스타 모달 백엔드 연결
  const [postData, setPostData] = useState(null);
  console.log(selectedPostNumber);
  useEffect(() => {
    // selectedPostNumber를 사용하여 해당 번호의 데이터를 조회
    if (selectedPostNumber) {
      axios.get(`/dsta/getDstaByDstarNo/${selectedPostNumber}`)
        .then((res) => {
          setPostData(res.data);
        })
        .catch((err) => {
          console.error(`데이터 조회 실패: ${err}`);
        });
    }
  }, [selectedPostNumber]);


  useEffect(() => {
    // selectedPostNumber가 없을 때만 실행
    if (!selectedPostNumber) {
      // 댕스타 전체 데이터
      axios({
        url: './data/dstaModal.json',
        method: 'GET'
      })
        // 성공
        .then((res) => {
          setDstaModal(res.data.dstaModalData);
        })
        // 에러
        .catch((err) => {
          console.log(`AXIOS 실패!${err}`);
        });
    }
  }, []);

  const handleLikeClick = () => {
    setLike(!like); // Toggle the like state
  };

  const handleCommentLikeClick = (commentIndex) => {
    // 개별 댓글의 좋아요 상태를 토글
    const newCommentLikes = [...commentLikes];
    newCommentLikes[commentIndex] = !newCommentLikes[commentIndex];
    setCommentLikes(newCommentLikes);
  };

  const handleOpenSettingsModal = () => {
    setSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = (e) => {
    e.stopPropagation();

    setSettingsModalOpen(false);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    adjustTextareaHeight(e.target);

    // 텍스트 입력 여부를 검사하고 상태 업데이트
    if (e.target.value.trim() !== '') {
      setIsCommentEntered(true);
    } else {
      setIsCommentEntered(false);
    }
  };

  const adjustTextareaHeight = (element) => {
    element.style.height = '18px'; // Reset the height to auto to recalculate it
    element.style.height = element.scrollHeight + 'px'; // Set the height to match the content
  };

  const handleWriteComment = () => {
    // 작성 버튼을 누를 때 댓글 작성 로직을 구현
    // 여기에서 작성한 댓글을 서버에 저장하거나 다른 작업을 수행할 수 있습니다.
  };

  const swiperOptions = {
    slidesPerView: 1
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      {postData ? (
        <DstaDetail postData={postData} closeModal={closeModal} />
      ) : (
        dstaModal && dstaModal.map((item, index) => (
          <a className='axios' href="#!" key={item.id}>
            <button onClick={closeModal} className="close-button">X</button>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="photos">
                  <Swiper
                    className='swiper'
                    {...swiperOptions}
                    pagination={{
                      el: '.sec1-swiper-pagination',
                      bulletClass: "swiper-pagination-bullet",
                      bulletActiveClass: "swiper-pagination-bullet-active",
                      clickable: true
                    }}
                    navigation={{
                      prevEl: '.sec1-swiper-prev-btn',
                      nextEl: '.sec1-swiper-next-btn'
                    }}
                  >
                    {item.imgSrcArray.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <img src={imgSrc} alt={`강아지 게시글 사진 ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button className="sec1-swiper-prev-btn">
                    <img src="./img/main/arrow_gray.svg" alt="" />
                  </button>
                  <button className="sec1-swiper-next-btn">
                    <img src="./img/main/arrow_gray.svg" alt="" />
                  </button>
                  <div className="sec1-swiper-pagination"></div>
                </div>
                <div className='words'>
                  <div className='profile'>
                    <img src={item.writerProfileImgSrc} alt="프로필 사진" />
                    <div className='profileName'>{item.writerUserId}</div>
                    <div className='settings'>
                      <button className='settingsBtn' onClick={handleOpenSettingsModal}>
                        <img src="./img/settings.png" />
                      </button>
                    </div>
                  </div>
                  <div className='content'>
                    <div className='contentWords'>{item.contentText}</div>
                    <div className='tagsBox'><span className='tags'>{item.contentTag}</span></div>
                    <div className='contentLikesBox'>
                      <span className='contentLikes' onClick={handleLikeClick}>
                        <img src={like ? "./img/heart3.png" : "./img/heart2.png"} alt="Heart Icon" />
                        좋아요 {item.contentLikes}개</span></div>
                    <div className='contentTime'>{item.contentTime}시간 전</div>
                  </div>
                  <div className='commentBox'>
                    {item.comments.map((comment, commentIndex) => (
                      <div className='commentSection' key={commentIndex}>
                        <img src={comment.commentProfileImgSrc} alt="프로필 사진" />
                        <div className='commentProfileBox'>
                          <span className='commentProfile'>{comment.commentUserId}
                          </span>
                          <div className='comment'>{comment.commentText}</div>
                          <div className='commentDetails'>
                            <div className='commentDate'>{comment.commentDate}</div>
                            <div className='commentLikes' onClick={() => handleCommentLikeClick(commentIndex)}>
                              {/* 각 댓글의 좋아요 상태를 개별적으로 처리 */}
                              <img src={commentLikes[commentIndex] ? "./img/heart3.png" : "./img/heart2.png"} alt="Heart Icon" />
                              좋아요 {comment.commentLikes}개
                            </div>
                            <button className='cocomment'>답글 달기</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='commentWritingSection'>
                    <textarea
                      placeholder="댓글 달기..."
                      className="writingComment"
                      value={comment}
                      onChange={handleCommentChange}
                      style={{ height: '18px' }} // Set the initial height to auto
                    ></textarea>
                    <button className={`write-button ${!isCommentEntered ? 'disabled' : ''}`} onClick={handleWriteComment}>
                      작성
                    </button>
                  </div>
                </div>

              </div>
            </div>
            {
              isSettingsModalOpen && (
                <DstaPostMenuModal closeModal={handleCloseSettingsModal} />
              )
            }
          </a>
        ))
      )}

    </div>
  );
}