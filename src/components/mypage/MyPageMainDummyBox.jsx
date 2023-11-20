import React from 'react';
import { useState} from 'react';
import Pagination from './MyPageMainPagination';

export default function DummyBox ({activeTab}){
  //가짜 데이터 *데이터 내용 적당히 지어내기*
  const myDmunityComment = [
    {
      "userid": "eodeod",
      "postid": "eodeoddmunity2",
      "title": "우리 애기 오늘 퇴원합니다!!",
      "date": "2023-11-19",
      "view": 89
    },
    {
      "userid": "eodeod",
      "postid": "eodeoddmunity1",
      "title": "강아지 간식 추천받아요",
      "date": "2023-11-18",
      "view": 156
    },
  ];

  const myDstaComment = [
    {
      "userid": "eodeod",
      "postid": "eodeoddmunity1",
      "title": "벌써 가족이 된지 한 달이 넘어가네요",
      "date": "2023-10-27",
      "view": 27
    },
  ];

  const myDmunityLike = [
    {
      "userid": "eodeod",
      "postid": "eodeoddmunity1",
      "title": "강아지한테 고구마줘도 돼요?",
      "date": "2023-10-27",
      "view": 27
    },
  ];

  const myDstaLike = [
    {
    "userid": "eodeod",
    "postid": "eodeoddmunity1",
    "title": "밖에 나왔더니, 집가기 싫다고 떼쓰는 중",
    "date": "2023-10-27",
    "view": 27
    },
  ];

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
  <>
        {/*작성한 댓글 */}
            {activeTab === 1 && (
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
                          {/* 댕뮤니티 테이블 헤드 구상 */}
                          <th>번호</th>
                          <th>제목</th>
                          <th>작성일</th>
                          <th>조회수</th>
                        </tr>
                      </thead>
                      <tbody className='body_row'>
                        {getCurrentPagePosts(10, myDmunityComment).map((post) => (
                          <tr key={`${selectedOption}-${post.postid}`} className="data_row">
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
                      totalPages={Math.ceil(myDmunityComment.length / 10)}
                      onPageChange={handlePageChange}>
                    </Pagination>
                  </div>
                )}
                {selectedOption === 'dsta' && (
                  <div className='list_box'>
                    <table className='list_table'>
                      <thead>
                        <tr className='head_row'>
                          {/* 댕스타 테이블 헤드 구상 */}
                          <th>번호</th>
                          <th>제목</th>
                          <th>작성일</th>
                          <th>조회수</th>
                        </tr>
                      </thead>
                      <tbody className='body_row'>
                        {getCurrentPagePosts(10, myDstaComment).map((post) => (
                          <tr key={`${selectedOption}-${post.postid}`} className="data_row">
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
                      totalPages={Math.ceil(myDstaComment.length / 10)}
                      onPageChange={handlePageChange}>
                    </Pagination>
                  </div>
                )}
              </div>
            )}
            {/*좋아요한 글 */}
            {activeTab === 2 && (
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
                          {/* 댕뮤니티 테이블 헤드 구상 */}
                          <th>번호</th>
                          <th>제목</th>
                          <th>작성일</th>
                          <th>조회수</th>
                        </tr>
                      </thead>
                      <tbody className='body_row'>
                        {getCurrentPagePosts(10, myDmunityLike).map((post) => (
                          <tr key={`${selectedOption}-${post.postid}`} className="data_row">
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
                      totalPages={Math.ceil(myDmunityLike.length / 10)}
                      onPageChange={handlePageChange}>
                    </Pagination>
                  </div>
                )}
                {selectedOption === 'dsta' && (
                  <div className='list_box'>
                    <table className='list_table'>
                      <thead>
                        <tr className='head_row'>
                          {/* 댕스타 테이블 헤드 구상 */}
                          <th>번호</th>
                          <th>제목</th>
                          <th>작성일</th>
                          <th>조회수</th>
                        </tr>
                      </thead>
                      <tbody className='body_row'>
                        {getCurrentPagePosts(10, myDstaLike).map((post) => (
                          <tr key={`${selectedOption}-${post.postid}`} className="data_row">
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
                      totalPages={Math.ceil(myDstaLike.length / 10)}
                      onPageChange={handlePageChange}>
                    </Pagination>
                  </div>
                )}
              </div>
            )}
      </>
  );
}