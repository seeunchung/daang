import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

export default function DstaMainModal({ closeModal }) {

  useEffect(() => {
    // 모달 열려있을 때 스크롤 막기
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트 될 때 스크롤 허용
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    }
  };

  const swiperRef = useRef(null);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <button onClick={closeModal} className="close-button">X</button>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">


          <div className='photos'>
            <Swiper {...swiperOptions}>
              <SwiperSlide>
                <img src="./img/강아지사진.png" alt="강아지 게시글 사진" />
              </SwiperSlide>
            </Swiper>
            <button className="dstamain_swiperprev">
              <img src="./img/main/arrow_gray.svg" alt="<버튼" />
            </button>
            <button className="dstamain_swipernext">
              <img src="./img/main/arrow_gray.svg" alt=">버튼" />
            </button>
            <div className="dstamain_swiperpage"></div>
          </div>


          <div className='words'>
            <div className='profile'>
              <img src="./img/footer_logo.png" alt="프로필 사진" />
              <div className='profileName'>본문프로필</div>
              <div className='settings'><img src="./img/settings.png" /></div>
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
                  <div className='cocomment'>답글 달기</div>
                </div>
              </div>
            </div>
            <div className='commentWritingSection'>
              <div className='writeComment'>댓글 달기...</div>
              <div className='write-button'>작성</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}