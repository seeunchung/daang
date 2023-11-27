import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function getCategoryImage(category) {       //카테고리 별 아이콘 설정
  switch (category) {
    case 1:
      return '../img/dmunity/eat.png';
    case 2:
      return '../img/dmunity/sick.png';
    case 3:
      return '../img/dmunity/play.png';
    case 4:
      return '../img/dmunity/how.png';
    case 5:
      return '../img/dmunity/etc.png';
    default:
      return '../img/dmunity/notification.png';
  }
}

export default function DmunityMainPage() {

  const [isEatToggle, setIsEatToggle] = useState(false);
  const [isSickToggle, setIsSickToggle] = useState(false);
  const [isPlayToggle, setIsPlayToggle] = useState(false);
  const [isHowToggle, setIsHowToggle] = useState(false);
  const [isEtcToggle, setIsEtcToggle] = useState(false);

  const [postList, setPostList] = useState([]);
  const [pinnedPost, setPinnedPost] = useState(null); // 고정 글 상태 추가
  const [inputValue, setInputValue] = useState(''); //입력 값 관리
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/dmunity/dmunityMainPage',
      method: 'GET'
    })
      // 성공
      .then((res) => {
        const posts = res.data.filter((post) => post.dmunityNo !== 1);
        setPostList(posts); // 일반 게시글
        const foundPinnedPost = res.data.find((post) => post.dmunityNo === 1);
        setPinnedPost(foundPinnedPost); //고정 게시글
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });
  }, []);

  const onClickEatToggle = () => {
    setIsEatToggle(!isEatToggle);
  };

  const onClickSickToggle = () => {
    setIsSickToggle(!isSickToggle);
  };

  const onClickPlayToggle = () => {
    setIsPlayToggle(!isPlayToggle);
  };

  const onClickHowToggle = () => {
    setIsHowToggle(!isHowToggle);
  };

  const onClickEtcToggle = () => {
    setIsEtcToggle(!isEtcToggle);
  };

  useEffect(() => {
    setCurrentPage(1); // 카테고리 변경 시 현재 페이지 초기화
    const updatedFilteredPosts = postList.filter((post) => {
      if (isEatToggle && post.dmunityCategory === 1) return true;
      if (isSickToggle && post.dmunityCategory === 2) return true;
      if (isPlayToggle && post.dmunityCategory === 3) return true;
      if (isHowToggle && post.dmunityCategory === 4) return true;
      if (isEtcToggle && post.dmunityCategory === 5) return true;
      return false;
    });
    setFilteredPosts(updatedFilteredPosts);
  }, [postList, isEatToggle, isSickToggle, isPlayToggle, isHowToggle, isEtcToggle]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  function strCut(str) {
    if (!str || str.length === 0) {
      return ''; // 또는 다른 기본값을 반환할 수 있음
    }

    if (str.length > 45) {
      return str.substr(0, 45) + '...';
    }

    return str;
  }

  //날짜 포맷 변환 함수
  function getFormattedDate(dateString) {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  //Html 태그 제거 함수
  const removeHtmlTagsAndCut = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const textContent = doc.body.textContent || "";

    // 적용된 strCut 함수를 이용하여 글자 수 제한
    const maxLength = 45;
    const trimmedText = textContent.substring(0, maxLength);

    if (textContent.length > maxLength) {
      return trimmedText + '...';
    }

    return trimmedText;
  };



  // 페이징 시작
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 9; // 한 페이지당 보여질 아이템 수

  // 클릭한 페이지 번호를 받아 currentPage 상태를 업데이트
  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지에서 마지막 아이템의 인덱스
  const indexOfLastItem = currentPage * itemsPerPage;
  // 현재 페이지에서 첫 번째 아이템의 인덱스
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // 현재 페이지에 해당하는 아이템만 표시
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수 계산
  const totalPageCount = Math.ceil((filteredPosts.length > 0 ? filteredPosts.length : postList.length) / itemsPerPage);

  // 페이징 끝


  return (
    <div id="dmunity">
      <div className='categoryContainer'>
        <div className='row1'>
          <img src='./img/dmunity/dmunity.png' alt='dmunity' /><h2>community</h2>
        </div>
        <div className='row2'>
          <button type='buuton' onClick={onClickEatToggle}>{isEatToggle ? <img src='./img/dmunity/eat_onclick.png' alt="" /> : <img src='./img/dmunity/eat.png' alt="" />}<span>먹어요</span></button>
          <button type='buuton' onClick={onClickSickToggle}>{isSickToggle ? <img src='./img/dmunity/sick_onclick.png' alt="" /> : <img src='./img/dmunity/sick.png' alt='' />}<span>아파요</span></button>
          <button type='buuton' onClick={onClickPlayToggle}>{isPlayToggle ? <img src='./img/dmunity/play_onclick.png' alt="" /> : <img src='./img/dmunity/play.png' alt='' />}<span>놀아요</span></button>
          <button type='buuton' onClick={onClickHowToggle}> {isHowToggle ? <img src='./img/dmunity/how_onclick.png' alt="" /> : <img src='./img/dmunity/how.png' alt='' />}<span>어때요</span></button>
          <button type='buuton' onClick={onClickEtcToggle}> {isEtcToggle ? <img src='./img/dmunity/etc_onclick.png' alt="" /> : <img src='./img/dmunity/etc.png' alt='' />}<span>기타</span></button>
        </div>
      </div>
      <div id='postsboard'>
        <div className='row1'>
          <img src='../img/dmunity/posts.png' alt='posts' /><h2>posts</h2>
          <div className='sorting'>최신순</div>
        </div>
        <div className='row2'>
          {/**postbox 상단에 고정 하는 공지사항 게시글 */}
          {pinnedPost && (
            <div id="post">
              <div className='postLeft'>
                <img className="category" src={getCategoryImage(pinnedPost.dmunityCategory)} alt={pinnedPost.dmunityCategory} />
              </div>
              <div className='postMiddle'>
                <Link to={`/dmunity-detail?dmunityNo=${pinnedPost.dmunityNo}`}>
                  <div className="title">{strCut(pinnedPost.dmunityTitle)}</div>
                  <div className="contents">
                    {removeHtmlTagsAndCut(pinnedPost.dmunityText)}
                  </div>
                  <div className="info">
                    <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{pinnedPost.dmunityHit}</p></span>
                    <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{pinnedPost.dmunityLike}</p></span>
                    <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{pinnedPost.dmunityComments}</p></span>
                  </div>
                </Link>
              </div>
              <div className='postRight'>
                <div className="date">{getFormattedDate(pinnedPost.dmunityDate)}</div>
                <div className='userid'>{pinnedPost.userid}</div>
              </div>
            </div>
          )}
          {
            // 선택한 카테고리에 따라 해당 카테고리인 게시글을 보여줌
            (isEatToggle || isSickToggle || isPlayToggle || isHowToggle || isEtcToggle)
              ? currentItems.map((post, idx) => (
                <div key={idx} id="post">
                  <div className='postLeft'>
                    <img className="category" src={getCategoryImage(post.dmunityCategory)} alt={post.dmunityCategory} />
                  </div>
                  <div className='postMiddle'>
                    <Link to={`/dmunity-detail?dmunityNo=${post.dmunityNo}`}>
                      <div className="title">{strCut(post.dmunityTitle)}</div>
                      <div className="contents">
                        {/* ckeditor에서 생성된 HTML 태그를 제거하고 글자 수 제한 */}
                        {removeHtmlTagsAndCut(post.dmunityText)}
                      </div>
                      <div className="info">
                        <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{post.dmunityHit}</p></span>
                        <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{post.dmunityLike}</p></span>
                        <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{post.dmunityComments}</p></span>
                      </div>
                    </Link>
                  </div>
                  <div className='postRight'>
                    <div className="date">{getFormattedDate(post.dmunityDate)}</div>
                    <div className='userid'>{post.userid}</div>
                  </div>
                </div>
              ))
              // 전체 게시글을 보여줌
              : postList.slice(indexOfFirstItem, indexOfLastItem).map((post, idx) => (
                <div key={idx} id="post">
                  <div className='postLeft'>
                    <img className="category" src={getCategoryImage(post.dmunityCategory)} alt={post.dmunityCategory} />
                  </div>
                  <div className='postMiddle'>
                    <Link to={`/dmunity-detail?dmunityNo=${post.dmunityNo}`}>
                      <div className="title">{strCut(post.dmunityTitle)}</div>
                      <div className="contents">
                        {/* ckeditor에서 생성된 HTML 태그를 제거하고 글자 수 제한 */}
                        {removeHtmlTagsAndCut(post.dmunityText)}
                      </div>
                      <div className="info">
                        <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{post.dmunityHit}</p></span>
                        <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{post.dmunityLike}</p></span>
                        <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{post.dmunityComments}</p></span>
                      </div>
                    </Link>
                  </div>
                  <div className='postRight'>
                    <div className="date">{getFormattedDate(post.dmunityDate)}</div>
                    <div className='userid'>{post.userid}</div>
                  </div>
                </div>
              ))
          }
        </div>
        <div className='row3'>
          {/* 댕뮤니티 페이징 */}
          <div className='dmunitymain_pagebox'>
            {/* 이전페이지 버튼 */}
            <button onClick={() => handleClickPage(currentPage - 1)} disabled={currentPage === 1}>
              &lt;
            </button>
            {Array.from({ length: totalPageCount }, (_, index) => (
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
