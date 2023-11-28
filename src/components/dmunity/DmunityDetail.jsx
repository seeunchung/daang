import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
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

export default function DmunityDetail() {
  const navigate = useNavigate();
  //쿼리스티링에서 dmunityNo 값 가져오기
  const location = useLocation();
  const dmunityNo = new URLSearchParams(location.search).get('dmunityNo');


  const [post, setPost] = useState([]); // dmunityNo으로 가지고 온 데이터

  useEffect(() => {
    axios({
      url: `/dmunity/dmunityDetail/${dmunityNo}`,
      method: 'GET'
    })
      // 성공
      .then((res) => {
        setPost(res.data)
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


  //댓글 목록
  const [comment, setComment] = useState([]);

  //댓글 작성 버튼 제출시 작동하는 함수(데이터 전송X 프론트엔드에서만 가능)
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment((current) => {
      const newList = [...current]
      newList.push({
        img: '../img/dsta/dogprofile.png',
        userid: "김땡땡",
        text: inputValue,
        date: "방금 전"
      });
      return newList;
    })
    setInputValue("");
  }

  // 댓글 삭제 버튼(프론트만...)

  const handleCommentDelete = (index) => {
    setComment((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });

  }


  //게시물 삭제버튼 기능

  const handleDelete = () => {
    // 확인 창 띄우기
    const isConfirmed = window.confirm('게시물을 삭제하시겠습니까?');

    if (isConfirmed) {
      // 서버에 삭제 요청 보내는 로직 추가
      axios({
        url: `/dmunity/${dmunityNo}/dmunityDelete`,
        method: 'DELETE'
      })
        .then((res) => {
          // 삭제 성공 시
          console.log('게시물이 성공적으로 삭제되었습니다.');
          navigate('/dmunity');
        })
        .catch((err) => {
          // 삭제 실패 시 에러 처리
          console.error('게시물 삭제 실패:', err);
        });
    }

  };

  return (
    <div id='DmunityDetail'>
      < div id='container' >
        <div className='title'>
          <img src="./img/dmunity/dmunity.png" alt="" />
          <Link to='/dmunity'><h2>댕뮤니티</h2></Link>
        </div>
        <div className="content">
          <div className='pots-title'>
            <img src={getCategoryImage(post.dmunityCategory)} alt='카테고리아이콘' />
            <h2>{post.dmunityTitle}</h2>
            <div className="profile-box">
              {post.userid === '김땡땡' ? (
                <img src="./img/dsta/dogprofile.png" alt="프로필이미지" />
              ) : (
                <img src="./img/dsta/best-dsta-profile.png" alt="프로필이미지" />
              )}
              <span>{post.userid}</span>
            </div>
          </div>
          <div className='info-box'>
            <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{post.dmunityHit}</p></span>
            <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{post.dmunityLike}</p></span>
            <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{post.dmunityComments + comment.length}</p></span>
          </div>
          <div className="text-area">
            <div dangerouslySetInnerHTML={{ __html: post.dmunityText }} />
          </div>
          <div className='like_comment_count'>
            <img src='./img/heart3.png' alt='' />
            <p>좋아요 {post.dmunityLike} 개</p>
            <p>댓글 {post.dmunityComments + comment.length}개</p>
          </div>
          <div className='comment_box'>
            {/**임시 댓글  */}
            <ul>
              {/**작성한 댓글 리스트 보여주는 기능 */}
              {comment.map((item, index) => {
                return (
                  <li className='comment_list' key={index}>
                    <div className='profile_box'>
                      <img src={item.img}></img>
                      <div className='userid'>{item.userid}</div>
                    </div>
                    <div className='comment_text'>
                      <div className='comment_detail'>
                        <div>{item.text}</div>
                        <div className='date'>{item.date}</div>
                      </div>
                      <div className='reply' onClick={() => handleCommentDelete(index)}>답글달기  삭제</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <form className='comment_form' onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="댓글 달기..."
            />
            <button type='submit'>작성</button>
          </form>

          <div className='button_box'>
            <Link to='/dmunity'><button className='list'>목록</button></Link>
            {post.userid === '김땡땡' && (
              <div className='edit-delete-btn'>
                <Link to={`/dmunity-edit?dmunityNo=${post.dmunityNo}`}><button className='edit-btn'><span>수정</span></button></Link>
                <button className='delete-btn' onClick={handleDelete}><span>삭제</span></button>
              </div>
            )}

          </div>
        </div>
      </div >
    </div >
  );
};
