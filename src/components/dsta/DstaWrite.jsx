import React from 'react';

export default function DstaWrite() {
  return (
    <main id="main">
      <div className='dstawrite_container'>
        <h2 className='dstawrite_title'>✨댕스타 작성하기✨</h2>
        <span className='spring_img'></span>
        <form className='innerbox'>
          <div className='leftbox'>
            <div className='thumbnail'>
              <button className='thubnail_btn'>썸네일등록</button>
            </div>
          </div>
          <div className='rightbox'>
            <div className='input_contentsbox'>
              <textarea className='textcontent'></textarea>
              <input className='tagcontent' type='text'></input>
              <div className='addphto'>사진등록</div>
              <div className='btn_box'>
                <button className='submit_btn' type='submit'>완료</button>
                <button className='cancel_btn' type='submit'>취소</button>
              </div>
            </div>
          </div>
        </form>
        <div className='webname'>DAaaNG UNIV.</div>
      </div>
    </main>
  );
};
