import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../signin/UserContent';
import axios from 'axios';

export default function Header() {
  const location = useLocation();
  const { isLogin, logout } = useUser();

  useEffect(() => {
    // 페이지 이동 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [location]);

  const handleLogout = async () => {
    try {
      // 서버 측 로그아웃 요청 보내기
      const response = await axios.post('/login/logout', null, {
        withCredentials: true, // 세션 쿠키를 서버에 전송하기 위해 withCredentials 설정
      });
  
      if (response.status === 200) {
        // 클라이언트 측 로그아웃 처리
        logout();
      } else {
        console.error('Failed to logout on the server');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <header id='header'>
        <div className="container">
          <div className="left">
            <ul>
              <li className={`left-menu ${location.pathname === '/dsta' ? 'on' : ''}`}><Link to='/dsta'>댕스타</Link></li>
              <li><i>|</i></li>
              <li className={`left-menu ${location.pathname === '/dmunity' ? 'on' : ''}`}><Link to='/dmunity'>댕뮤니티</Link></li>
              <li><i>|</i></li>
              <li className={`left-menu ${location.pathname === '/dmap' ? 'on' : ''}`}><Link to='/dmap'>댕동여지도</Link></li>
            </ul>
          </div>
          <div className="center">
            <Link to='/'>
              <img src="./img/header_logo.png" alt="" />
            </Link>
          </div>
          <div className="right">
            <ul>
              {isLogin ? (
                <>
                  <li className='right-menu mypage'><Link to='/mypage'>마이페이지</Link></li>
                  <li><i>|</i></li>
                  <li className='right-menu logout' onClick={handleLogout}><Link to='/'>로그아웃</Link></li>
                </>
              ) : (
                <>
                  <li className='right-menu login'><Link to='/login'>로그인</Link></li>
                  <li><i>|</i></li>
                  <li className='right-menu signup'><Link to='/signup'>회원가입</Link></li>
                </>
              )}
              <li><i>|</i></li>
              <li className='right-menu'>
                <button type='button' className='write-btn'>
                  <span>글쓰기</span>
                  <img src="./img/header/arrow_down.svg" alt="" />
                </button>
                {
                  isLogin
                    ? (
                      <ul className='login-tooltip'>
                        <li>
                          <Link to='/dsta-write'>
                            <div className="img-box">
                              <img src="./img/Instagram.png" alt="" />
                            </div>
                            <div className="caption-box">
                              <h2>댕스타 글쓰기</h2>
                              <span>자신의 반려견을 자랑해 보세요!</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to='/dmunity-write'>
                            <div className="img-box">
                              <img src="./img/dmunity/dmunity.png" alt="" />
                            </div>
                            <div className="caption-box">
                              <h2>댕뮤니티 글쓰기</h2>
                              <span>궁금하거나 모르는걸 물어봐요!</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    )
                    :
                    <ul className='not-login-tooltip'>
                      <li>
                        <Link to='/login'>
                          <div className="img-box">
                            <img src="./img/Instagram.png" alt="" />
                          </div>
                          <div className="caption-box">
                            <h2>댕스타 글쓰기</h2>
                            <span>자신의 반려견을 자랑해 보세요!</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/login'>
                          <div className="img-box">
                            <img src="./img/dmunity/dmunity.png" alt="" />
                          </div>
                          <div className="caption-box">
                            <h2>댕뮤니티 글쓰기</h2>
                            <span>궁금하거나 모르는걸 물어봐요!</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                }

              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
