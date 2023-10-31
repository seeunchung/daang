import React, { useEffect } from 'react';


export default function DstaMainModal({ closeModal }) {

  useEffect(() => {
    // 모달 열려있을 때 스크롤 막기
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트 될 때 스크롤 허용
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <button onClick={closeModal} className="close-button">X</button>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <p>상세사진</p>
          <p>본문 밑 댓글</p>
        </div>
      </div>
    </div>
  );
}