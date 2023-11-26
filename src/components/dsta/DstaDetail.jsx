import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import DstaPostMenuModal from './DstaPostMenuModal';

SwiperCore.use([Navigation, Pagination]);

export default function DstaDetail({ postData, closeModal,setWriteData}) {
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [isCommentEntered, setIsCommentEntered] = useState(false);
  const [like, setLike] = useState(false);
  const [dstaModal, setDstaModal] = useState([]);
  const [commentLikes, setCommentLikes] = useState(Array(dstaModal.length).fill(false));

  const dstarNo = postData.dstarNo;
  const dstaImgs = [postData.dstarThumbnail,postData.dstarImg1, postData.dstarImg2, postData.dstarImg3, postData.dstarImg4];

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
              <div className='profileName'>막둥이</div>
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
                  <img src={like ? "./img/heart3.png" : "./img/heart2.png"} alt="Heart Icon" />
                  좋아요 {postData.dstarLike}개</span></div>
              <div className='contentTime'>{postData.dstarDate}</div>
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
          <DstaPostMenuModal closeModal={closeModal} setWriteData={setWriteData} dstarNo = {dstarNo}/>
        )
      }
    </div>
  );
};
