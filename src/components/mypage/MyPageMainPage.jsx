import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MyPageMainPage() {
  //메뉴 탭 색상 바뀌게
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const buttonTabs = ['작성한 글', '작성한 댓글', '좋아요한 글'];

  //셀렉트 옵션에 따라 조건부 렌더링
  const [selectedOption, setSelectedOption] = useState('dmunity'); // 초기 옵션 설정

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value); // 선택한 옵션으로 상태 업데이트
  }



  // 받아올 데이터(임시)
  const dmunityPosts = [
    {
      id: 1,
      title: '강아지 간식 추천 받아요~',
      date: '23.10.11',
      views: 3,
    },
    {
      id: 1,
      title: '강아지 간식 추천 받아요~',
      date: '23.10.11',
      views: 3,
    },
    {
      id: 1,
      title: '강아지 간식 추천 받아요~',
      date: '23.10.11',
      views: 3,
    },
  ];

  return (
    <main id='mypage' className='mypage_main'>
      <Link to='/mypage-edit'>회원정보 수정</Link>
      {/*학생증 섹션 */}
      <section className='card_section'>
        <p>학생증</p>
      </section>
      {/*내 글 모아보기 */}
      <section className='myposts'>
        <ul className='list_btn_box'>
          {buttonTabs.map((tab, index) => (
            <li className='tabs' key={index}>
              <button
                onClick={() => handleButtonClick(index)}
                className={`tab_btn ${activeButton === index ? 'active' : ''}`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
        <div className='myposts_container'>
          <div className='total_box'>
            <select className="post_filter" onChange={handleSelectChange} value={selectedOption}>
              <option value="dmunity">댕뮤니티</option>
              <option value="dsta">댕스타</option>
            </select>
            {selectedOption === "dmunity" && (
              <div className='list_box'>
                <table className='list_table'>
                  <thead>
                    <tr className='head_row'>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성일</th>
                      <th>조회수</th>
                    </tr>
                  </thead>
                  <tbody className='body_row'>
                    {dmunityPosts.map((post) => (
                      <tr key={post.id} className='data_row'>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.date}</td>
                        <td>{post.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>1/2/3/4/5/6/7/8/9/10</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};