import React from 'react';
import { Link } from 'react-router-dom';


export default function SignUpComplete() {
  return (
    <main id='main' className='login'>
      <section id='finish'>
        <ul>
        <div className="complete">
          <div className="title">
            <div className="img-box">
              <img src='./img/completeimg.png' alt=''/>
            </div>
          </div>
          <div className="commsg">
            <h2>
              입학이 완료되었습니다.
            </h2>
            </div>
            <li>
              <Link to="/" className='to-home'>홈으로</Link>

            </li>
            <li>
              <Link to="/Login" className='to-login'>로그인</Link>

            </li>

        </div> 
        </ul>
      </section>

    </main>
  );
};