import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import DstaMainModal from './DstaMainModal'

SwiperCore.use([Navigation, Pagination])

export default function DstaMainPage() {

  //이미지 데이터를 저장할 상태
  const [dstaMain, setdstaMain] = useState([]);
  const [dstaSwiperData, setDstaSwiperData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  // 페이징 시작
  const itemsPerPage = 16; // 한 페이지당 보여질 아이템 수

  // 클릭한 페이지 번호를 받아 currentPage 상태를 업데이트
  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지에서 마지막 아이템의 인덱스
  const indexOfLastItem = currentPage * itemsPerPage;
  // 현재 페이지에서 첫 번째 아이템의 인덱스
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // 현재 페이지에 해당하는 아이템만 표시
  const currentItems = dstaMain.slice(indexOfFirstItem, indexOfLastItem);

  // 페이징 끝

  useEffect(() => {
    // 댕스타 전체 데이터
    axios({
      url: './data/dstaMain.json',
      method: 'GET'
    })

      //성공
      .then((res) => {
        setdstaMain(res.data.dstaMainData)
        console.log(res.data)
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });

    // swiper 조회수 순 이미지 데이터
    axios({
      url: './data/dstaMain.json', // 조회수가 많은 이미지를 반환하는 API 엔드포인트로 업데이트 필요
      method: 'GET'
    })
      .then((res) => {
        setDstaSwiperData(res.data.dstaSwiperData); // 이미지 데이터를 상태에 저장
      })
      .catch((err) => {
        console.log(`AXIOS 실패! ${err}`);
      });
  }, []);

  // swiper
  const swiperOptions = {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 3,
    autoplay: {
      delay: 3000,
    }
  };
  // 모달
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (

    <main id='main' className='dstamain'>
      <div className='dstamain_container'>
        <div className='dstamain_titlecontainer'>
          <img src="./img/dsta/calendar.png" alt="캘린더 아이콘" />
          <h2 className='dstamain_title'>Weekly DAaaNG-STA</h2>
        </div>

        {/* 모달 */}
        {/* <button onClick={openModal}>모달 열기</button>
        {isModalOpen && <DstaMainModal closeModal={closeModal} />} */}
        {/* 모달 끝 */}

        <div className='dstamain_weeklybox'>

          {/* 스와이퍼 */}
          <div className="dstamain_swipercontainer">
            <Swiper
              className='dstamain_swiper'
              {...swiperOptions}
              pagination={{
                el: '.dstamain_swiperpage',
                bulletClass: 'dstamain_swiperbullet',
                bulletActiveClass: 'dstamain_swiperbulletactive',
                clickable: true,
              }}

              navigation={{
                prevEl: '.dstamain_swiperprev',
                nextEl: '.dstamain_swipernext'
              }}
            >
              {/* 조회수 많은 데이터 이미지 */}
              {dstaMain && dstaSwiperData.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className='weekly_photobox'>
                  <img src={item.imgSrc} alt="댕스타 조회수 사진" />
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
            {/* 페이징 버튼 */}
            <button className="dstamain_swiperprev">
              <img src="./img/main/arrow_gray.svg" alt="<버튼" />
            </button>
            <button className="dstamain_swipernext">
              <img src="./img/main/arrow_gray.svg" alt=">버튼" />
            </button>
            <div className="dstamain_swiperpage"></div>
          </div>
          {/* 스와이퍼 끝 */}

        </div>

        {/* 댕스타 타이틀 */}
        < div className='dstamain_titlecontainer'>
          <img src="./img/dsta/instagram.png" alt="댕스타 아이콘" />
          <h2 className='dstamain_title'>DAaaNG-STA</h2>
        </div>

        {/* 댕스타 메인 데이터 */}
        <div className='dstamain_pagecontainer'>
          {currentItems.map((item, index) => (
            // a태그 href에 맞는 데이터값 설정
            <a href="#!" key={item.id}>
              <div className='dstamain_photobox'>
                <img src={item.imgSrc} onClick={openModal} alt="강아지 게시글 사진" />
                <div className='dstamain_profile'>
                  <img src={item.profileImgSrc} alt="프로필 사진" />
                  <span>{item.userId}</span>
                </div>
                <div className='dstamain_phototextbox'>
                  <span>{item.title}</span>
                </div>
                <div className='dstamain_watchbox'>
                  <img src="./img/dsta/watch.png" alt="조회수 아이콘" />
                  <span>{item.viewCount}</span>
                  <img src="./img/dsta/heart.png" alt="좋아요 아이콘" />
                  <span>{item.likeCount}</span>
                  <img src="./img/dsta/coments.png" alt="댓글 아이콘" />
                  <span>{item.commentCount}</span>
                </div>
              </div>
              {isModalOpen && <DstaMainModal closeModal={closeModal} />}
            </a>))}
        </div>
        {/* 댕스타 페이징 */}
        <div className='dstamain_pagebox'>
          {/* 이전페이지 버튼 */}
          <button onClick={() => handleClickPage(currentPage - 1)} disabled={currentPage === 1}>
            &lt;
          </button>

          {Array.from({ length: Math.ceil(dstaMain.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClickPage(index + 1)}
              style={{ color: currentPage === index + 1 ? '#AB8B61' : '#EEE1D7' }}
            >
              {index + 1}
            </button>
          ))}
          {/* 다음페이지 버튼 */}
          < button onClick={() => handleClickPage(currentPage + 1)} disabled={currentPage === Math.ceil(dstaMain.length / itemsPerPage)}>
            &gt;
          </button>
        </div>
      </div>
    </main >
  );

};