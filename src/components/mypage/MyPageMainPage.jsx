import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './MyPageMainPagination';

export default function MyPageMainPage() {

  //받아올 데이터
  const [idcardInfo, setIdcardInfo] = useState([]);
  const [myDmunity, setMyDmunity] = useState([]);
  const [myDsta, setMyDsta] = useState([]);

  useEffect(() => {
    axios({
      url: './data/mypageMain.json',
      method: 'GET'
    })
      .then((res) => {
        setIdcardInfo(res.data.idcard);
        setMyDmunity(res.data.dmunity);
        setMyDsta(res.data.dsta);
      })
      .catch((err) => {
        console.log(`AXIOS 실패! ${err}`);
      });
  }, []);

  //메뉴 탭 색상 바뀌게
  const [activeButton, setActiveButton] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    setActiveTab(buttonIndex);
  };

  const buttonTabs = ['작성한 글', '작성한 댓글', '좋아요한 글'];

  // 페이지네이션 관련 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 게시물 목록에서 현재 페이지의 게시물을 반환하는 함수
  const getCurrentPagePosts = (postsPerPage, posts) => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts.map((post, index) => ({
      ...post,
      number: indexOfFirstPost + index + 1,
    }));
  };

  // 페이지 변경 처리 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //셀렉트 옵션에 따라 조건부 렌더링
  const [selectedOption, setSelectedOption] = useState('dmunity'); // 초기 옵션 설정
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value); // 선택한 옵션으로 상태 업데이트
    setCurrentPage(1) //페이지네이션 상태 초기화
  }

  return (
    <main id='mypage' className='mypage_main'>
      <div className='mypage_main_container'>
        {/*학생증 섹션 */}
        <section className='card_section'>
          <div className='mypagemain_titlecontainer'>
            <img src="./img/mypage/mypage_dog.png" alt="강아지 아이콘" />
            <h2 className='mypagemain_title'>My Page</h2>
          </div>
          <img className='page_prev' src='./img/mypage/idcard_page.png' alt='<버튼'></img>
          <img className='page_next' src='./img/mypage/idcard_page.png' alt='>버튼'></img>
          <div className='mypageedit_idcard'>
            <div className='mypageedit_idcardhead'>
              <div className='mypageedit_headcontainer'>
                <img src="./img/mypage/idcard_dog.png" alt="강아지 메인 학생증 선택 아이콘" />
                <h2 className='mypageedit_headtitle'>STUDENT</h2>
              </div>
            </div>
            <img className='idcard_stamp' src='./img/mypage/idcard_stamp.png' alt="학생증 도장" />
            <div className='idcard_bodycontainer'>
            <img className='idcard_dog' src={idcardInfo.length > 0 && idcardInfo[0].dogimg ? String(idcardInfo[0].dogimg) : ''} alt='강아지 사진' />
              <div className='idcard_info'>
                <div>
                  <h2 className='idcard_infotext'>이름 :</h2>
                  <div className='idcard_infobox'>
                    <div className='info_textarea'>
                      {idcardInfo.length > 0 && idcardInfo[0].dogname}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='idcard_infotext'>학과 :</h2>
                  <div className='idcard_infobox'>
                    <div className='info_textarea'>
                      {idcardInfo.length > 0 && idcardInfo[0].major}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='idcard_infotext'>학번 :</h2>
                  <div className='idcard_infobox'>
                    <div className='info_textarea'>
                      {idcardInfo.length > 0 && idcardInfo[0].birth}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='idcard_infotext'>특징 :</h2>
                  <div className='idcard_infobox'>
                    <div className='info_textarea'>
                      {idcardInfo.length > 0 && idcardInfo[0].features}
                    </div>
                  </div>
                </div>
              </div>
              <div className='idcard_univ'>DAaaNG UNIV</div>
              <img className='idcard_barcode' src='./img/mypage/barcode.png' alt='바코드 사진' />
            </div>
          </div>
          <div className='btn_box'>
            <Link to='/mypage-edit'> <button className='edit_btn' type='submit'>회원정보 수정</button> </Link>
          </div>
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
            {activeTab === 0 && (
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
                        {getCurrentPagePosts(10, myDmunity).map((post) => (
                          <tr key={post.postid} className="data_row">
                            <td>{post.number}</td>
                            <td>{post.title}</td>
                            <td>{post.date}</td>
                            <td>{post.view}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(myDmunity.length / 10)}
                      onPageChange={handlePageChange}>
                    </Pagination>
                  </div>
                )}
                {selectedOption === 'dsta' && (
                  <div className='dsta_listbox'>
                    <ul className='dsta_lists'>
                      {getCurrentPagePosts(8, myDsta).map((post) => (
                        <li key={post.postid}>
                          <img className='dsta_list' src={post.img} alt='thumbnail_img' />
                        </li>
                      ))}
                    </ul>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(myDsta.length / 8)}
                      onPageChange={handlePageChange}>
                    </Pagination>
                  </div>
                )}
              </div>
            )}

          </div>
        </section>
      </div>
    </main>
  );
};