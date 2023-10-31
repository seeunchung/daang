import React from 'react';
import { Link } from 'react-router-dom';

export default function MyPageMainPage() {
  return (
    <main id='mypage' className='mypage_main'>
      <Link to='/mypage-edit'>회원정보 수정</Link>
    </main>
  );
};