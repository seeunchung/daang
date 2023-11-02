import React from 'react';

export default function MypageEdit() {
  return (
    <main id='mypage' className='mypageedit'>
      <div className='mypageedit_container'>
        <div className='mypageedit_titlecontainer'>
          <img src="./img/mypage_dog.png" alt="강아지 아이콘" />
          <h2 className='mypageedit_title'>Edit Info.</h2>
        </div>
        <div className='mypageedit_idcard'></div>
      </div>
    </main>
  );
};