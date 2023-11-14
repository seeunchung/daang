import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DmunityDetail() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios({
      url: './data/dmunity.json',
      method: 'GET'
    })
      // 성공
      .then((res) => {
        setPost(res.data.dmunityMain)
        setPost(post[0])
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

  return (
    <div id='DmunityDetail'>
      < div id='container' >
        <div className='title'>
          <h2 className='logo'>댕뮤니티</h2>
        </div>
        <div className="content">
          <div className='row2'>
            <img src='./img/dmunity/eat.png' alt='' />
            <h2 className='title'>안녕하세요</h2>
          </div>
          <div className='row3'>
            <div className="info">
              <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>12</p></span>
              <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>26</p></span>
              <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>32</p></span>
            </div>
          </div>
          <div className='row4'>
            <div className="text-area">
              <h2>
                안녕하세요. DAaaNG UNIV.입니다. 댕뮤니티 글 작성 시 유의 사항에 대해 공지하겠습니다. 1. 글 작성 간 카테고리 준수해주세요. 글 내용에 맞지 않는 카테고리 선택 시 글이 옮겨지거나 삭제 될 수 있습니다. 2. 커뮤니티 성격과 맞지 않는 내용의 글 작성 시 글 삭제와 1회 경고 이후 정지 처분을 받을 수 있습니다.
              </h2>
            </div>
          </div>
          <div className='row5'><img src='./img/dmunity/heart_click.png' alt='' /><p>좋아요</p>
            <p>댓글 15개</p>
          </div>
          <div className='row6'>

          </div>
          <div className='row7'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="댓글 달기..."
            />
            <button>작성</button>
          </div>
          <div className='row8'>
            <button className='list'>목록</button>
            <div>
              <button className='edit'>수정</button>
              <button className='delete'>삭제</button>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};
