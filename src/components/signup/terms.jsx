import React from 'react';


function TermsPopup({ content, onClose }) {
  const handleCloseModal = () => {
    onClose(); // 모달 닫기
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <button className='confirm-button' onClick={handleCloseModal}>확인</button>
      </div>
    </div>
  );
}

export default TermsPopup;