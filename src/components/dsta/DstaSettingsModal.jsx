import React from 'react';

export default function DstaSettingsModal({ closeModal }) {
  // 설정 모달 내용 및 동작을 구현합니다.

  return (
    <div className="settings-modal-container" onClick={closeModal}>
      <div className="settings-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className='deleteContent'>삭제</button>
        <button className='editContent'>수정</button>
        <button className='shareContent'>공유</button>
        <button className='undoBtn' onClick={closeModal}>취소</button>
      </div>
    </div>
  );
}
