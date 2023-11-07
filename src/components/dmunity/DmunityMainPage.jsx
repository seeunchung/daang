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
      url: './data/dmunityMain.json',
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


  return (
    <div id="dmunity">
      <div className='categoryContainer'>
        <div className='row1'>
          <img src='../img/dmunity/dmunity.png' alt='dmunity' /><h2> 커뮤니티</h2>
        </div>
        <div className='row2'>
          <span><button type='buuton'><img src={'../img/dmunity/eat.png'} alt="" /></button><a href='#!'>먹어요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/sick.png'} alt="" /></button><a href='#!'>아파요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/play.png'} alt="" /></button><a href='#!'>놀아요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/how.png'} alt="" /></button><a href='#!'>어때요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/etc.png'} alt="" /></button><a href='#!'>기타</a></span>
        </div>
      </div>
      <div id='postsboard'>
        <div className='row1'>
          <img src='../img/dmunity/posts.png' alt='posts' /><h2> posts</h2>
          <div className='sorting'>최신순</div>
        </div>
        <div className='row2'>
          {
            postList && postList.map((postList, idx) => {
              return (
                <div id="post">
                  <div className='postLeft'>
                    <img className="category" src={getCategoryImage(postList.category)} alt={postList.category} />
                  </div>
                  <div className='postMiddle'>
                    <Link to='/dmunity/DmunityDetail'>
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
          <nav className='pagination'>
            <a href='#'>&laquo;</a>
            <a href='#'>&lt;</a>
            <a href='#'>1</a>
            <a href='#'>2</a>
            <a href='#'>3</a>
            <a href='#'>4</a>
            <a href='#'>5</a>
            <a href='#'>6</a>
            <a href='#'>7</a>
            <a href='#'>&gt;</a>
            <a href='#'>&raquo;</a>
          </nav>
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
