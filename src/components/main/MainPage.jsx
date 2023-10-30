import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Mousewheel } from "swiper";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Mousewheel])


export default function MainPage() {

  const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    }

  };

  return (
    <main id='main' className='mainPage'>
      <section id='section1'>
        <div className="sec1-swiper-container">
          <Swiper
            className='swiper'
            {...swiperOptions}
            pagination={{
              el: '.sec1-swiper-pagination',
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              clickable: true,
            }}
            navigation={{
              prevEl: '.sec1-swiper-prev-btn',
              nextEl: '.sec1-swiper-next-btn'
            }}
          >
            <SwiperSlide>
              <img src="./img/main/main_sec1_slide_1.png" alt="" />
              <div className="slide1-title">
                <h2>
                  <span>귀여운 강아지의 일상을 공유하고,</span>
                  <span>나의 강아지를 자랑해보세요~</span>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/main/main_sec1_slide_2.png" alt="" />

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
      </section>
      <section id='section2'>
        <div className="sec2_container">
          <h2>섹션2</h2>
        </div>
      </section>
      <section id='section3'>
        <div className="title">
          <h2>
            당신의 도움이 필요합니다.
          </h2>
        </div>
        <div className="content">
          <div className="sec3-swiper-container">
            <Swiper
              className='swiper'
              {...swiperOptions}
              pagination={{
                el: '.sec3-swiper-pagination',
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                clickable: true,
              }}
              navigation={{
                prevEl: '.sec3-swiper-prev-btn',
                nextEl: '.sec3-swiper-next-btn'
              }}
            >
              <SwiperSlide>
                <img src="./img/main/main_sec3_slide_1.png" alt="" />
                <div className="slide1-title">
                  <h2>
                    <span>지난해 유기견 <strong>약 79,976여 마리</strong></span>
                    <span>유기견의 안락사와 자연사 비중은 꾸준히 증가하고 있습니다.</span>
                    <span>질병이나 상해로 고통받는 유기견에게 <strong>가족이 되어주세요</strong></span>
                    <a href='https://forust.kr/19' target='_black'>자세히보기<img src="./img/main/arrow_right.png" alt="" /></a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-box"></div>
                <div className="slide2-title">
                  <h2>
                    <span>이 아이가 <strong>배가 부르다는</strong> 느낌을 알까요?</span>
                    <span>고통에 몸부림치는 <strong>아이들을 구해주세요</strong></span>
                    <a href='https://forust.kr/19' target='_black'>자세히보기<img src="./img/main/arrow_right.png" alt="" /></a>
                  </h2>
                </div>
                {/* <img src="./img/main/main_sec3_slide_2.png" alt="" /> */}

              </SwiperSlide>

            </Swiper>
            <button className="sec3-swiper-prev-btn">
              <img src="./img/main/arrow_gray.svg" alt="" />
            </button>
            <button className="sec3-swiper-next-btn">
              <img src="./img/main/arrow_gray.svg" alt="" />
            </button>
            <div className="sec3-swiper-pagination"></div>
          </div>
          <div className="abandoned_dog_info">
            <ul>
              <li>
                <img src="./img/main/ico-rescue.png" alt="" />
                오늘 구조된 동물
                <strong className='data-rescue'>0</strong>
                마리
              </li>
              <li>
                <img src="./img/main/ico-adoption.png" alt="" />
                입양률
                <strong className='data-adoption'>23</strong>
                %
              </li>
              <li>
                <img src="./img/main/ico-euthanasia.png" alt="" />
                안락사율
                <strong className='data-euthanasis'>17</strong>
                %
              </li>
            </ul>
          </div>
        </div>

      </section>
    </main>
  );
};