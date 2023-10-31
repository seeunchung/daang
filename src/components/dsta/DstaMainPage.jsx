import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

export default function DstaMainPage() {

  const swiperOptions = {
    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 3000,
    }

  };

  return (
    <main id='main' className='dstamain'>
      <div className='dstamain_container'>
        <div className='dstamain_titlecontainer'>
          <img src="./img/Calendar 7.png" alt="캘린더 아이콘" />
          <h2 className='dstamain_title'>Weekly DAaaNG-STA</h2>
        </div>
        <div className='dstamain_weeklybox'>

          {/* 스와이퍼 */}
          <div className="dstamain_swipercontainer">
            <Swiper
              className='swiper'
              {...swiperOptions}
              pagination={{
                el: 'dstamain_swiperpage',
                bulletClass: "dstamain_swiperbullet",
                bulletActiveClass: "dstamain_swiperbulletactive",
                clickable: true,
              }}
              navigation={{
                prevEl: '.dstamain_swiperprev',
                nextEl: '.dtamain_swipernext'
              }}
            >
              <SwiperSlide>
                1
              </SwiperSlide>
              <SwiperSlide>
                2
              </SwiperSlide>
              <SwiperSlide>
                3
              </SwiperSlide>
              <SwiperSlide>
                4
              </SwiperSlide>
              <SwiperSlide>
                5
              </SwiperSlide>
              <SwiperSlide>
                6
              </SwiperSlide>
              <SwiperSlide>
                7
              </SwiperSlide>
              <SwiperSlide>
                8
              </SwiperSlide>

            </Swiper>
            {/* 페이징 버튼 */}
            {/* <button className="dstamain_swiperprev">
              <img src="./img/main/arrow_gray.svg" alt="" />
            </button>
            <button className="dtamain_swipernext">
              <img src="./img/main/arrow_gray.svg" alt="" />
            </button>
            <div className="dtamain_swiperpage"></div> */}
          </div>
          {/* 스와이퍼 끝 */}

        </div>
        <div className='dstamain_titlecontainer'>
          <img src="./img/Instagram.png" alt="댕스타 아이콘" />
          <h2 className='dstamain_title'>DAaaNG-STA</h2>
        </div>
        <div className='dstamain_photobox'>
          <img src="./img/강아지사진.png" alt="강아지 게시글 사진" />
          <div className='dstamain_profile'>
            <img src="./img/footer_logo.png" alt="프로필 사진" />
            <span>꿈이언니</span>
          </div>
          <div className='dstamain_phototextbox'>
            <span>안녕하세요~ 꿈이 왔어요ㅎ</span>
          </div>
          <div className='dstamain_watchbox'>
            <img src="./img/watch.png" alt="조회수 아이콘" />
            <span>123</span>
            <img src="./img/heart.png" alt="좋아요 아이콘" />
            <span>456</span>
            <img src="./img/coments.png" alt="댓글 아이콘" />
            <span>789</span>
          </div>
        </div>
        {/* 지울것들 */}
        <div className='dstamain_photobox'>
          <img src="./img/강아지사진.png" alt="강아지 게시글 사진" />
          <div className='dstamain_profile'>
            <img src="./img/footer_logo.png" alt="프로필 사진" />
            <span>꿈이언니</span>
          </div>
          <div className='dstamain_phototextbox'>
            <span>안녕하세요~ 꿈이 왔어요ㅎ</span>
          </div>
        </div>
        <div className='dstamain_photobox'>
          <img src="./img/강아지사진.png" alt="강아지 게시글 사진" />
          <div className='dstamain_profile'>
            <img src="./img/footer_logo.png" alt="프로필 사진" />
            <span>꿈이언니</span>
          </div>
          <div className='dstamain_phototextbox'>
            <span>안녕하세요~ 꿈이 왔어요ㅎ</span>
          </div>
        </div>
        <div className='dstamain_photobox'>
          <img src="./img/강아지사진.png" alt="강아지 게시글 사진" />
          <div className='dstamain_profile'>
            <img src="./img/footer_logo.png" alt="프로필 사진" />
            <span>꿈이언니</span>
          </div>
          <div className='dstamain_phototextbox'>
            <span>안녕하세요~ 꿈이 왔어요ㅎ</span>
          </div>
        </div>
        <div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
        </div>
        <div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
        </div>
        <div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
          <div className='dstamain_photobox'></div>
        </div>
        {/* 여기까지 */}
        <div className='dstamain_pagebox'>
          <span>- 1 2 3 4 5 6 7 8 9 -</span>
        </div>
      </div>
    </main>
  );
};

