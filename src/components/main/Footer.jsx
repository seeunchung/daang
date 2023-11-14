import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="left">
          <ul>
          <Link to='/TermsOfUse'><li className='left-menu'>이용약관</li></Link>
            <li><i>|</i></li>
          <Link to='/ConsentToReceiveMarketing'><li className='left-menu'>마케팅 수신동의</li></Link>
          <li><i>|</i></li>
            <Link to='/PrivacyPolicy'><li className='left-menu'>개인정보처리방침</li></Link>
          </ul>
        </div>
        <div className="center">
          <span>
            <strong>Hoya</strong>
            <i>|</i>
            <strong>Brandon</strong>
            <i>|</i>
            <strong>Yeriel</strong>
            <i>|</i>
            <strong>Danny</strong>
            <i>|</i>
            <strong>Hoju</strong>
            <i>|</i>
            <strong>Sammy</strong>
            <i>|</i>
            <strong>Gavin</strong>
            <i>|</i>
            <strong>Tchoi</strong>
            <i>|</i>
            <strong>Ethan</strong>
            <i>|</i>
          </span>
          <span>2023 ESG support program produced by rmsoft 2023 by produce</span>
          <span>&copy;댕 유니브의 모든 컨텐츠는 저작권법의 보호를 받으므로 무단 전재·복사·배포 등을 금합니다.</span>
        </div>
        <div className="right">
          <ul>
            <li><a href="#!"><img src="./img/footer_logo.png" alt="" /></a></li>
            <li><a href="#!"><img src="./img/ico_fb.png" alt="" /></a></li>
            <li><a href="#!"><img src="./img/ico_instagram.png" alt="" /></a></li>
            <li><a href="#!"><img src="./img/ico_youtube.png" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};