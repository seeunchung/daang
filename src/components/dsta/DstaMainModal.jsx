import React from 'react';

export default function DstaMainModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <button onClick={closeModal} className="close-button">X</button>
      <div className="modal">
        <div className="modal-content">
          <p>상세사진</p>
          <p>본문 밑 댓글</p>
        </div>
      </div>
    </div>
  );
}