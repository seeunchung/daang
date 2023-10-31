import React, {useState} from 'react';

export default function SignUp() {


  return (
    <main id='signup' className="signup_main">
      <section id="signup_sec">
        <div className="signupcontainer">
          <div className="main-title">
          <h2>견주</h2>

          </div>
        </div>
        <div className='sub-title'>
          <span>[필수]</span>
        </div>
        <div className="content">
          <form name='form_sign_up'>
            <ul>
              <li>
               <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>아이디</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='16' name='input_id' id='inputId' placeholder='아이디를 입력해주세요'
                      />
                      <button type="button" className='id-ok-btn' >중복확인</button>
                    </div>
                  </div>
              </li>
              <li>
                <div className="left">
                  <div className="left-wrap">
                    <label htmlFor='inputId'><strong>비밀번호</strong></label>
                  </div>
                </div>
                <div className="right">
                  <div className="right-wrap">
                    <input type='password' name='input_pw1' id='inputPw1' placeholder='비밀번호를 입력해주세요'></input>
                  </div>
                </div>
              </li>
              <li>
                <div className="left">
                  <div className="left-wrap">
                    <label htmlFor='inputId'><strong>비밀번호확인</strong></label>
                  </div>
                </div>
                <div className="right">
                  <div className="right-wrap">
                    <input type='password' name='input_pw2' id='inputPw2'placeholder='비밀번호를 한번 더 입력해주세요'></input>
                  </div>
                </div>
              </li>
              <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>이름</strong><i></i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_name' id='inputName' placeholder='이름을 입력해주세요'></input>
                    </div>
                  </div>
              </li>
              <li>
               <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>닉네임</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='16' name='input_nick' id='inputNick' placeholder='닉네임을 입력해주세요'
                      />
                      <button type="button" className='nick-ok-btn' >중복확인</button>
                    </div>
                  </div>
              </li>
              <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>휴대폰</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='11' name='input_hp' id='inputHp' placeholder='숫자만 입력해주세요'
                      
                      />
                    </div>
                  </div>
              </li>
              <div className='container'>
                <div className="second-title">
                  <h2>강아지</h2>
                </div>
              </div>
              <div className='sub-title'>
                 <span>[선택]</span>
              </div>
              <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>이름</strong><i></i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_dogname' id='inputdogName' placeholder='강아지 이름을 입력해주세요'></input>
                    </div>
                  </div>
              </li>
              <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>생년월일</strong><i></i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_birth' id='inputbirth' placeholder='강아지 생년월일을 입력해주세요'></input>
                    </div>
                  </div>
              </li>
              <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>견종</strong><i></i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_dogbreed' id='inputdogBreed' placeholder='견종을 입력해주세요'></input>
                    </div>
                  </div>
              </li>
              <li>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>특이사항</strong><i></i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_spe' id='inputSpe' placeholder='특이사항을 입력해주세요'></input>
                    </div>
                  </div>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </main>
  );
}

