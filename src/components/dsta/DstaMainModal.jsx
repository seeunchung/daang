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
          <div className='photos'>
            <img src="./img/footer_logo.png" alt="프로필 사진" />
          </div>
          <div className='words'>
            <div className='profile'>
              <img src="./img/footer_logo.png" alt="프로필 사진" />
              <div className='profileName'>본문프로필</div>
              <div className='settings'>설정</div>
            </div>
            <div className='content'>
              <div className='contentWrods'>본문 내용</div>
              <div className='tag'>#출근한지 #1시간 #퇴근하고싶다</div>
              <div className='contentLikes'>좋아요 OO개</div>
              <div className='contentTime'>O시간</div>
            </div>
            <div className='commentSection'>
              <img src="./img/footer_logo.png" alt="프로필 사진" />
              <div className='commentProfileName'>댓글프로필
                <div className='comment'>댓글내용</div>
                <div>
                  <div className='commentDate'>2013.11.02</div>
                  <div className='commentLikes'>좋아요 O개</div>
                  <div className='cocomment'>답글 달기</div>
                </div>
              </div>
            </div>
            <div>
              <div className='writeComment'>댓글 달기...</div>
              <div className='write-button'>작성</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}