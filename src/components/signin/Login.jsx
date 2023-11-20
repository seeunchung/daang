import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../main/Header';
import { useUser } from './UserContent'; // 가상의 사용자 컨텍스트 훅으로 가정

export default function Login() {
  const { isLogin, login, logout } = useUser(); // 가상의 사용자 컨텍스트 훅으로 가정
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    id: '',
    pw: '',
  });
  const [errMsg, setErrMsg] = useState('');

  const onChangeId = (e) => {
    setCredentials({
      ...credentials,
      id: e.target.value,
    });
  };

  const onChangePw = (e) => {
    setCredentials({
      ...credentials,
      pw: e.target.value,
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (credentials.id === 'kiik52' && credentials.pw === 'eoddbslqm2!@') {
      login(); // 사용자 로그인 처리
    } else {
      logout(); // 사용자 로그아웃 처리
      setErrMsg('아이디, 비밀번호를 다시 확인해 주세요');
    }
  };

  useEffect(() => {
    // 페이지가 이동될 때마다 isLogin 상태 업데이트
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <Header isLogin={isLogin} onLoginChange={isLogin ? logout : login} />
      <main id='main' className='login'>
        <section id='signin'>
          <div className='container'>
            <div className='title'>
              <div className='img-box'>
                <img src='./img/login/graduation_cap.png' alt='' />
              </div>
              <h2>로그인</h2>
            </div>
            <div className='content'>
              <form className='login-form'>
                <ul className='custom-login'>
                  <li>
                    <input
                      type='text'
                      id='id'
                      name='id'
                      placeholder='아이디를 입력해주세요.'
                      onChange={onChangeId}
                      value={credentials.id}
                    />
                  </li>
                  <li>
                    <input
                      type='password'
                      id='pw'
                      name='pw'
                      placeholder='비밀번호를 입력해주세요'
                      onChange={onChangePw}
                      value={credentials.pw}
                    />
                  </li>
                  <li>
                    <a href='#!'>아이디 찾기</a>
                    <i>|</i>
                    <a href='#!'>비밀번호 찾기</a>
                    <p className={`err-msg${isLogin ? '' : ' on'}`}>{errMsg}</p>
                  </li>
                  <li>
                    <button type='submit' className='submit-btn' onClick={onSubmitLogin}>
                      <span className='login-text'>로그인</span>
                    </button>
                  </li>
                  <li>
                    <Link to='/signup'>
                      <button type='button' className='signup-btn'>
                        <span className='signup-text'>회원가입</span>
                      </button>
                    </Link>
                  </li>
                </ul>
                <div className='sns-login'>
                  <button type='button'>
                    <img src='./img/login/naver_logo.png' alt='' />
                  </button>
                  <button type='button'>
                    <img src='./img/login/kakao_logo.png' alt='' />
                  </button>
                  <button type='button'>
                    <img src='./img/login/google_logo.png' alt='' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
