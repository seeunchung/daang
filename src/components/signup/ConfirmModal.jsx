import React from 'react';

export default function ConfirmModalComponent({ msg, isConfirmModalCloseFn }) {

  // confirmModal 확인 버튼 클릭 시 닫기 함수
  const onClickClose = (e) => {
    e.preventDefault();
    isConfirmModalCloseFn();
  }

  return (
    <div id='confirmModal'>
      <div className="wrap">
        <div className="container">
          <div className="img"></div>
          <div className="content">
            <h2>{msg}</h2>
          </div>
          <div className="button-box">
            <button
              className='modal-ok-btn'
              onClick={onClickClose}
            >
              <span className='confirm-modal-btn-span'>확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};