import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login({ isConfirmModalOpenFn }) {

  const [state, setState] = useState({
    id: '',
    pw: '',
    name: '',
    session_id: ''
  });

  // const [isLogin, setIsLogin] = useState = (false);

  const onChangeId = (e) => {
    setState({
      ...state,
      id: e.target.value
    });
  }
  const onChangePw = (e) => {
    setState({
      ...state,
      pw: e.target.value
    });
  }

  const onSubmitSignInEvent = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('id', state.id);
    formData.append('pw', state.pw);

    axios({
      url: 'https://kiik52.com/daaang/member_login.php',
      method: 'POST',
      data: formData
    })
      .then((res) => {
        if (res.data.id) { // 변경된 부분: res.data.아이디로 확인
          // 쿠키 설정하기: 3일
          let newDate = new Date();
          newDate.setDate(newDate.getDate() + 3); // 현재 날짜 + 3일
          let value = {
            id: res.data.id,
            name: res.data.name
          }
          document.cookie = `${res.data.session_id}=${JSON.stringify(value)}; path=/; expires=${newDate.toUTCString()};`;

          // 세션아이디 보관장소: 키는 우리가 정한 암호화된 키를 사용
          const key = 'JHPHPSESSIONID202311';
          localStorage.setItem(key, res.data.session_id);
          // 로그인 화면 초기화
          setState({
            id: '',
            pw: '',
            name: '',
            session_id: ''
          });

          // 인트로 페이지로 이동하기
          window.location.pathname = '/';
          // window.location.pathname = '/intro';

        } else {
          isConfirmModalOpenFn("가입 시 입력하신 회원 정보가 맞는지 다시 한번 확인해 주세요.");
        }

      })
      .catch((err) => {
        console.log(`AXIOS 실패! :  ${err}`);
      });
  }


  return (
    <main id='main' className='login'>
      <section id='signin'>
        <div className="container">
          <div className="title">
            <div className="img-box">
              <img src="./img/login/graduation_cap.png" alt="" />
            </div>
            <h2>로그인</h2>
          </div>
          <div className="content">
            <form onSubmit={onSubmitSignInEvent} method='post' className='login-form'>
              <ul className='custom-login'>
                <li><input
                  type="text"
                  id='id'
                  name='id'
                  placeholder='아이디를 입력해주세요.'
                  onChange={onChangeId}
                  value={state.id}
                />
                </li>
                <li><input
                  type="password"
                  id='pw'
                  name='pw'
                  placeholder='비밀번호를 입력해주세요'
                  onChange={onChangePw}
                  value={state.pw}
                /></li>
                <li><a href="#!">아이디 찾기</a><i>|</i><a href="#!">비밀번호 찾기</a></li>
                <li><button type='submit' className='submit-btn'><span className='login-text'>로그인</span></button></li>
                <li><Link to='/signup'><button type='button' className='signup-btn'><span className='signup-text'>회원가입</span></button></Link></li>
              </ul>
              <div className='sns-login'>
                <button type='button'><img src="./img/login/naver_logo.png" alt="" /></button>
                <button type='button'><img src="./img/login/kakao_logo.png" alt="" /></button>
                <button type='button'><img src="./img/login/google_logo.png" alt="" /></button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};