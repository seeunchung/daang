import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function getCategoryImage(category) {       //카테고리 별 아이콘 설정
  switch (category) {
    case '먹어요':
      return '../img/dmunity/eat.png';
    case '아파요':
      return '../img/dmunity/sick.png';
    case '놀아요':
      return '../img/dmunity/play.png';
    case '어때요':
      return '../img/dmunity/how.png';
    case '기타':
      return '../img/dmunity/etc.png';
    default:
      return '../img/dmunity/notification.png';
  }
}

export default function DmunityMainPage() {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios({
      url: './data/dmunity.json',
      method: 'GET'
    })
      // 성공
      .then((res) => {
        setPostList(res.data.dmunityMain)
        console.log(res.data)
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });
  }, []);

  const [inputValue, setInputValue] = useState(''); //입력 값 관리

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  function strCut(str) {
    if (str.length > 45) {
      return str.substr(0, 45) + '...'
    }
    return str
  }

  const [eatImg, setEatImg] = useState("../img/eat.png")

  // 페이징 시작
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 10; // 한 페이지당 보여질 아이템 수

  // 클릭한 페이지 번호를 받아 currentPage 상태를 업데이트
  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지에서 마지막 아이템의 인덱스
  const indexOfLastItem = currentPage * itemsPerPage;
  // 현재 페이지에서 첫 번째 아이템의 인덱스
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // 현재 페이지에 해당하는 아이템만 표시
  const currentItems = postList.slice(indexOfFirstItem, indexOfLastItem);

  // 페이징 끝


  return (
    <div id="dmunity">
      <div className='categoryContainer'>
        <div className='row1'>
          <img src='./img/dmunity/dmunity.png' alt='dmunity' /><h2>community</h2>
        </div>
        <div className='row2'>
          <span><button type='buuton'><img src='./img/dmunity/eat.png' alt="" /></button><a href='#!'>먹어요</a></span>
          <span><button type='buuton'><img src='./img/dmunity/sick.png' alt="" /></button><a href='#!'>아파요</a></span>
          <span><button type='buuton'><img src='./img/dmunity/play.png' alt="" /></button><a href='#!'>놀아요</a></span>
          <span><button type='buuton'><img src='./img/dmunity/how.png' alt="" /></button><a href='#!'>어때요</a></span>
          <span><button type='buuton'><img src='./img/dmunity/etc.png' alt="" /></button><a href='#!'>기타</a></span>
        </div>
      </div>
      <div id='postsboard'>
        <div className='row1'>
          <img src='../img/dmunity/posts.png' alt='posts' /><h2>posts</h2>
          <div className='sorting'>최신순</div>
        </div>
        <div className='row2'>
          {
            postList && currentItems.map((postList, idx) => {
              return (
                <div id="post">
                  <div className='postLeft'>
                    <img className="category" src={getCategoryImage(postList.category)} alt={postList.category} />
                  </div>
                  <div className='postMiddle'>
                    <Link to='/dmunity-detail'>
                      <div className="title">{strCut(postList.title)}</div>
                      <div className="contents">{strCut(postList.contents)}</div>
                      <div className="info">
                        <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{postList.view}</p></span>
                        <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{postList.likes}</p></span>
                        <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{postList.comments}</p></span>
                      </div>
                    </Link>
                  </div>
                  <div className='postRight'>
                    <div className="date">{postList.date}</div>
                    <div className='userid'>{postList.userid}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className='row3'>
          {/* 댕뮤니티 페이징 */}
        <div className='dmunitymain_pagebox'>
          {/* 이전페이지 버튼 */}
          <button onClick={() => handleClickPage(currentPage - 1)} disabled={currentPage === 1}>
            &lt;
          </button>
          {Array.from({ length: Math.ceil(postList.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClickPage(index + 1)}
              style={{ color: currentPage === index + 1 ? '#AB8B61' : '#EEE1D7' }}
            >
              {index + 1}
            </button>
          ))}
          {/* 다음페이지 버튼 */}
          < button onClick={() => handleClickPage(currentPage + 1)} disabled={currentPage === Math.ceil(postList.length / itemsPerPage)}>
            &gt;
          </button>
        </div>
          <div className='searchBox'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="검색"
            />
            <span>검색</span>
          </div>
        </div>
      </div>
    </div >
  );
}
