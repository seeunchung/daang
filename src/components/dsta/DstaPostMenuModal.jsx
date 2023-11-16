import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DstaDeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="delete-confirmation">
      <div className='deleteText'>정말 삭제하시겠습니까?</div>
      <div className='checkBox'>
        <button className='deleteBtn' onClick={onConfirm}>삭제</button>
      </div>
      <div>
        <button className='noDeleteBtn' onClick={onCancel}>취소</button>
      </div>
    </div>
  );
}

export default function DstaPostMenModal({ closeModal }) {
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    // 여기에서 삭제 로직을 추가하세요.
    setDeleteConfirmationOpen(false);
    closeModal();
  };

  const handleCancelDelete = () => {
    setDeleteConfirmationOpen(false);
  };

  return (
    <div className="settings-modal-container" onClick={closeModal}>
      <div className="settings-modal-content" onClick={(e) => e.stopPropagation()}>
        {isDeleteConfirmationOpen ? (
          <DstaDeleteConfirmation
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        ) : (
          <>
            <button className='deleteContent' onClick={handleDeleteClick}>삭제</button>
            <Link to='/dsta-edit'><button className='editContent'>수정</button></Link>
            <button className='shareContent'>URL 복사하기</button>
            <button className='undoBtn' onClick={closeModal}>취소</button>
          </>
        )}
      </div>
    </div>
  );
}
