import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // 총 페이지 수만큼 페이지 번호 배열을 생성
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // 10 페이지씩 그룹화
  const pageGroups = [];
  for (let i = 0; i < pageNumbers.length; i += 10) {
    pageGroups.push(pageNumbers.slice(i, i + 10));
  }

  // 현재 페이지 그룹 번호 계산
  const currentPageGroup = Math.ceil(currentPage / 10) - 1;

  // 현재 페이지 그룹의 페이지 번호들만 사용
  const displayedPages = pageGroups[currentPageGroup] || [];

  return (
    <ul className="pagination">
      <button
        className='pre_btn'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1} // 첫 페이지에서는 이전 버튼 비활성화
      >&lt;</button>
      {displayedPages.map((page) => (
        <li
          key={page}
          className={`page_item ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
      <button
        className='next_btn'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages} // 마지막 페이지에서는 다음 버튼 비활성화
      >&gt;</button>
    </ul>
  );
}