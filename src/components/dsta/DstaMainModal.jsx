import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import DstaSettingsModal from './DstaSettingsModal';


SwiperCore.use([Navigation, Pagination]);

export default function DstaMainModal({ closeModal }) {

  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [isCommentEntered, setIsCommentEntered] = useState(false);

  const handleOpenSettingsModal = () => {
    setSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
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

  const swiperOptions = {
    slidesPerView: 1
  };

  const adjustTextareaHeight = (element) => {
    element.style.height = '18px'; // Reset the height to auto to recalculate it
    element.style.height = element.scrollHeight + 'px'; // Set the height to match the content
  };

  const handleWriteComment = () => {
    // 작성 버튼을 누를 때 댓글 작성 로직을 구현
    // 여기에서 작성한 댓글을 서버에 저장하거나 다른 작업을 수행할 수 있습니다.
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
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
              <SwiperSlide>
                <img src="./img/dsta/강아지사진.png" alt="강아지 게시글 사진" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/강아지사진.png" alt="강아지 게시글 사진" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/강아지사진.png" alt="강아지 게시글 사진" />
              </SwiperSlide>
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
              <img src="./img/footer_logo.png" alt="프로필 사진" />
              <div className='profileName'>본문프로필</div>
              <div className='settings'>
                <button className='settingsBtn' onClick={handleOpenSettingsModal}>
                  <img src="./img/settings.png" />
                </button>
              </div>
            </div>
            <div className='content'>
              <div className='contentWords'>본문 내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
              <a className='tags'>#점심먹고 #시간이 #안가네</a>
              <div className='contentLikes'>
                <img src="./img/heart2.png" /> 좋아요 11개</div>
              <div className='contentTime'>O시간</div>
            </div>
            <div className='commentSection'>
              <img src="./img/footer_logo.png" alt="프로필 사진" />
              <div className='commentProfile'>댓글프로필
                <div className='comment'>댓글내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                <div className='commentDetails'>
                  <div className='commentDate'>OOOO.OO.OO</div>
                  <img src="./img/heart2.png" />
                  <div className='commentLikes'>좋아요 3개</div>
                  <button className='cocomment'>답글 달기</button>
                </div>
              </div>
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
          <DstaSettingsModal closeModal={handleCloseSettingsModal} />
        )
      }
    </div>
  );
}