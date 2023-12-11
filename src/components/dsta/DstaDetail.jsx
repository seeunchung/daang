import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import DstaPostMenuModal from './DstaPostMenuModal';

SwiperCore.use([Navigation, Pagination]);

export default function DstaDetail({ closeModal, selectedPostNumber, setWriteData }) {
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [isCommentEntered, setIsCommentEntered] = useState(false);
  const [like, setLike] = useState(false);
  const [dstaModal, setDstaModal] = useState([]);
  const [commentLikes, setCommentLikes] = useState(Array(dstaModal.length).fill(false));

  const [postData, setPostData] = useState(null);
  const [dstarNo, setDstarNo] = useState(null);
  const [dstaImgs, setDstaImgs] = useState([]);

  const [loading, setLoading] = useState(false); // 새로운 로딩 상태 변수 추가 
  //댕스타 모달 백엔드 연결
  useEffect(() => {
    // selectedPostNumber를 사용하여 해당 번호의 데이터를 조회
    if (selectedPostNumber) {
      setLoading(true); // 로딩 시작
      axios.get(`/dsta/getDstaByDstarNo/${selectedPostNumber}`)
        .then((res) => {
          const postData = res.data;
          setPostData(postData);
          setDstarNo(postData.dstarNo);
          setDstaImgs([`http://localhost:8080/dsta/images/${postData.dstarThumbnail}`, postData.dstarImg1, postData.dstarImg2, postData.dstarImg3, postData.dstarImg4]);
        })
        .catch((err) => {
          console.error(`데이터 조회 실패: ${err}`);
        })
        .finally(() => {
          setLoading(false); // 로딩 종료
        });
    }
  }, [selectedPostNumber]);




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
      {loading ? (
        <p>Loading...</p> // 로딩 중일 때의 UI
      ) : postData && (
        <div className='axios' href="#!" key={postData.dstarNo}>
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
                  {dstaImgs && dstaImgs.map((imgSrc, index) => (
                    imgSrc && // imgSrc가 존재하는 경우에만 SwiperSlide를 생성
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
                  <img src="./img/dsta/dogprofile.png" alt="프로필 사진" />
                  <div className='profileName'>김땡땡</div>
                  <div className='settings'>
                    <button className='settingsBtn' onClick={handleOpenSettingsModal}>
                      <img src="./img/settings.png" />
                    </button>
                  </div>
                </div>
                <div className='content'>
                  <div className='contentWords'>{postData.dstarText}</div>
                  <div className='tagsBox'><span className='tags'>{postData.dstarTag}</span></div>
                  <div className='contentLikesBox'>
                    <span className='contentLikes' onClick={handleLikeClick}>
                      <img src={like ? "./img/heart2.png" : "./img/heart3.png"} alt="Heart Icon" />
                      좋아요 {postData.dstarLike}개</span></div>
                  <div className='contentTime'>방금 전</div>
                </div>
                <div className='commentBox'>
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
              <DstaPostMenuModal closeModal={closeModal} setWriteData={setWriteData} dstarNo={dstarNo} />
            )
          }
        </div>
      )}
    </div>
  );
};
