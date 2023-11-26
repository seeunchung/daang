import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export default function Notification() {

  const [inputValue, setInputValue] = useState(''); //입력 값 관리

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  //조건에 따라 수정,삭제 버튼 렌더링
  const manager = false;

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
        date: "11.20"
      });
      return newList;
    })
    setInputValue("");
  }

  return (
    <div id='DmunityDetail'>
      < div id='container' >
        <div className='title'>
          <img src="./img/dmunity/dmunity.png" alt="" />
          <Link to='/dmunity'><h2>댕뮤니티</h2></Link>
        </div>
        <div className="content">
          <div className='pots-title'>
            <img src='./img/dmunity/notification.png' alt='' />
            <h2>글 작성 시 유의사항</h2>
            <div className="profile-box">
              <img src="./img/dsta/best-dsta-profile.png" alt="" />
              <span>총장</span>
            </div>
          </div>
          <div className='info-box'>
            <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>112</p></span>
            <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>26</p></span>
            <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{2 + comment.length}</p></span>
          </div>
          <div className="text-area">
            {/** 임시로 작성한 글, 데이터 받아와지면 삭제*/}
            <div>
              <div>안녕하세요. DAaaNG UNIV 총장입니다. </div>
              <div>댕뮤니티 글 작성 시 유의 사항에 대해 공지하겠습니다.</div>
              <h2>1. 글 작성 간 카테고리 준수</h2>
              <div>글 내용에 맞지 않는 카테고리 선택 시 글이 옮겨지거나 삭제 될 수 있습니다.</div>
              <h3>먹어요</h3>
              <div>먹어요 카테고리는 반려견 사료, 간식, 영양제 등 후기를 공유하고 추천 받는 카테고리입니다.</div>
              <div>직접 구입하지 않은 제품을 본인이 구입한 것처럼 올리는 정황 적발시 무통보 삭제 및 제재 대상입니다.</div>
              <h3>아파요</h3>
              <div>병원 후기 및 추천, 반려견 아픈 증상, 대처법 등을 공유하는 카테고리입니다.</div>
              <div>병원 홍보성 글은 무통보 삭제 및 제재 대상입니다.</div>
              <h3>놀아요</h3>
              <div>애견식당, 애견 카페, 반려견과의 여행후기 등을 자유롭게 올려주세요.</div>
              <h3>어때요</h3>
              <div>반려견 관련 물품 등을 추천받고 후기를 공유하는 카테고리입니다.</div>
              <div>직접 구입하지 않은 제품을 본인이 구입한 것처럼 올리는 정황 적발시 무통보 삭제 및 제재 대상입니다.</div>
              <h3>기타</h3>
              <div>먹어요, 아파요, 놀아요, 어때요 카테고리 외 반려견 관련 내용은 기타 카테고리에 자유롭게 작성해주세요.</div>
              <h2>2. 커뮤니티 성격과 맞지 않는 내용의 글 작성 금지</h2>
              <div>반려견 관련 내용이 아닌 개인 사생활 관련 내용 작성은 삼가 주세요.</div>
              <div>글 삭제와 1회 경고 이후 경고 3회 누적 시 정지 처분을 받을 수 있습니다.</div>
              <h2>3.상업활동 및 바이럴 마케팅</h2>
              <div>모든 게시판 내에서 상업 목적의 활동은 강력 제재 대상이며, 브랜드 홍보 목적의 활동 발견 시 강퇴 및 영구 정지 처리됩니다.</div>
              <h2>4.친목활동</h2>
              <div>댕뮤니티 게시판 내 회원들간의 친목 활동을 지양합니다. 개인적인 친분 과시나 사적인 친목을 위한 글은 금지입니다.</div>
            </div>
          </div>
          <div className='like_comment_count'>
            <img src='./img/dmunity/heart_click.png' alt='' />
            <p>좋아요 26개</p>
            <p>댓글 {2 + comment.length}개</p>
          </div>
          <div className='comment_box'>
            {/**임시 댓글  */}
            <ul>
              <li className='comment_list'>
                <div className='profile_box'>
                  <img src='../img/dsta/dstaMainData1.jpg'></img>
                  <div className='userid'>댕댕쓰</div>
                </div>
                <div className='comment_text'>
                  <div className='comment_detail'>
                    <div>잘부탁드립니당</div>
                    <div className='date'>11.17</div>
                  </div>
                  <div className='reply'>답글달기</div>
                </div>
              </li>
              <li className='comment_list'>
                <div className='profile_box'>
                  <img src='../img/dsta/dstaMainData2.jpg'></img>
                  <div className='userid'>꾸미</div>
                </div>
                <div className='comment_text'>
                  <div className='comment_detail'>
                    <div>나이스</div>
                    <div className='date'>11.18</div>
                  </div>
                  <div className='reply'>답글달기</div>
                </div>
              </li>
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
                      <div className='reply'>답글달기  삭제</div>
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
            {manager && (
              <div className='edit-delete-btn'>
                <Link to='/dmunity-edit'><button className='edit-btn'><span>수정</span></button></Link>
                <button className='delete-btn'><span>삭제</span></button>
              </div>
            )}

          </div>
        </div>
      </div >
    </div >
  );
};