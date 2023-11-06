import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main id='main' className='login'>
      <section id='signin'>
        <div className="container">
          <div className="title">
            <div className="img-box">
              <img src="./img/graduation_cap.png" alt="" />
            </div>
            <h2>로그인</h2>
          </div>
          <div className="content">
            <form action="/resopon.php" className='login-form'>
              <ul className='custom-login'>
                <li><input type="text" id='id' name='id' placeholder='아이디를 입력해주세요.' /></li>
                <li><input type="password" id='pw' name='pw' placeholder='비밀번호를 입력해주세요' /></li>
                <li><a href="#!">아이디 찾기</a><i>|</i><a href="#!">비밀번호 찾기</a></li>
                <li><button type='submit' className='submit-btn'><span className='login-text'>로그인</span></button></li>
                <li><Link to='/signup'><button type='button' className='signup-btn'><span className='signup-text'>회원가입</span></button></Link></li>
              </ul>
              <div className='sns-login'>
                <button type='button'><img src="./img/naver_logo.png" alt="" /></button>
                <button type='button'><img src="./img/kakao_logo.png" alt="" /></button>
                <button type='button'><img src="./img/google_logo.png" alt="" /></button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};