import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header id='header'>
        <div className="container">
          <div className="left">
            <ul>
              <li className='left-menu on'><Link to='dsta'>댕스타</Link></li>
              <li><i>|</i></li>
              <li className='left-menu'><Link>댕뮤니티</Link></li>
              <li><i>|</i></li>
              <li className='left-menu'><Link>댕동여지도</Link></li>
            </ul>
          </div>
          <div className="center">
            <Link to='/'>
              <img src="./img/header_logo.png" alt="" />
            </Link>
          </div>
          <div className="right">
            <ul>
              {/* 추후 로그인, 회원가입 글씨는 로그인 상태일때 닉네임, 로그아웃으로 보이게 하기 */}
              <li className='right-menu'><Link>로그인</Link></li>
              <li><i>|</i></li>
              <li className='right-menu'><Link>회원가입</Link></li>
              <li><i>|</i></li>
              <li className='right-menu'>
                <Link >글쓰기</Link>
                <ul className='tooltip'>
                  <li>
                    <Link>
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
                    <Link>
                      <div className="img-box">
                        <img src="./img/dmunity.png" alt="" />
                      </div>
                      <div className="caption-box">
                        <h2>댕뮤니티 글쓰기</h2>
                        <span>궁금하거나 모르는걸 물어봐요!</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};