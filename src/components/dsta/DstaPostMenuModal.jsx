import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

export default function DstaPostMenModal({ closeModal, dstarNo }) {
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const deleteUrl = `/dsta/deleteDsta/${dstarNo}`;
      // Axios를 사용하여 DELETE 요청 보내기
      await axios.delete(deleteUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // 요청이 성공적으로 처리되었을 때의 로직
      closeModal();
      // 데이터 삭제 후 페이지 새로고침
      window.location.reload();
    } catch (error) {
      // 요청이 실패했을 때의 오류 처리
      console.error('삭제 요청 중 오류 발생:', error);
    }
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
            <Link to={`/dsta-edit?dstarNo=${dstarNo}`}><button className='editContent'>수정</button></Link>
            <button className='shareContent'>URL 복사하기</button>
            <button className='undoBtn' onClick={closeModal}>취소</button>
          </>
        )}
      </div>
    </div>
  );
}
