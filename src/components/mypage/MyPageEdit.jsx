import React from 'react';

export default function MypageEdit() {
  return (
    <main id='mypage' className='mypageedit'>
      <div className='mypageedit_container'>
        <div className='mypageedit_titlecontainer'>
          <img src="./img/mypage/mypage_dog.png" alt="강아지 아이콘" />
          <h2 className='mypageedit_title'>Edit Info.</h2>
        </div>
        <img className='page_prev' src='./img/mypage/idcard_page.png' alt='<버튼'></img>
        <img className='page_next' src='./img/mypage/idcard_page.png' alt='>버튼'></img>
        <div className='mypageedit_idcard'>
          <div className='mypageedit_idcardhead'>
            <div className='mypageedit_headcontainer'>
              <img src="./img/mypage/idcard_dog.png" alt="강아지 메인 학생증 선택 아이콘" />
              <h2 className='mypageedit_headtitle'>STUDENT</h2>
            </div>
          </div>
          <img className='idcard_stamp' src='./img/mypage/idcard_stamp.png' alt="학생증 도장" />
          <div className='idcard_bodycontainer'>
            <img className='idcard_dog' src='./img/mypage/dog_img.png' alt='강아지 사진' />

            <div className='idcard_info'>
              <div>
                <h2 className='idcard_infotext'>이름 :</h2>
                <div className='idcard_infobox'>
                  <textarea className='info_textarea'>
                    강아지 이름을 작성해주세요.
                  </textarea>
                </div>
              </div>
              <div>
                <h2 className='idcard_infotext'>학과 :</h2>
                <div className='idcard_infobox'>
                  <textarea className='info_textarea'>
                    강아지 종류를 작성해주세요.
                  </textarea>
                </div>
              </div>
              <div>
                <h2 className='idcard_infotext'>학번 :</h2>
                <div className='idcard_infobox'>
                  <textarea className='info_textarea'>
                    강아지 생년월일 ex.20231212
                  </textarea>
                </div>
              </div>
              <div>
                <h2 className='idcard_infotext'>특징 :</h2>
                <div className='idcard_infobox'>
                  <textarea className='info_textarea'>
                    강아지 특징을 작성해주세요.
                  </textarea>
                </div>
              </div>
            </div>
            <div className='idcard_univ'>DAaaNG UNIV</div>
            <img className='idcard_barcode' src='./img/mypage/barcode.png' alt='바코드 사진' />
          </div>
        </div>
        <div className='btn_box'>
          <button className='add_btn' type='submit'>학생증 추가</button>
          <button className='del_btn' type='submit'>학생증 삭제</button>
        </div>
      </div>
    </main>
  );
};