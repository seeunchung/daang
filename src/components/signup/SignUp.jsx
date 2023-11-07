import React from 'react';

export default function SignUp() {


  return (
    <main id='signup' className="signup_main">
      <section id="signup-sec">
        <div className="signup-container">
          <div className="title">
            <div className="main-title">
              <img src="./img/signup/입학신청서 제목.png" alt="" />
            </div>
            <div className='sub-title'>
              <h2>-견주-</h2>
              <span><i>*</i>(필수)</span>
            </div>
          </div>
          <div className="content master">
            <form name='form_sign_up'>
              <ul className='user-info'>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>아이디</strong><i>*</i></label>
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
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor='inputId'><strong>비밀번호</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type='password' name='input_pw1' id='inputPw1' placeholder='비밀번호를 입력해주세요'></input>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor='inputId'><strong>비밀번호확인</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type='password' name='input_pw2' id='inputPw2' placeholder='비밀번호를 한번 더 입력해주세요'></input>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>이름</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_name' id='inputName' placeholder='이름을 입력해주세요'></input>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>닉네임</strong><i>*</i></label>
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
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>휴대폰번호</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='11' name='input_hp' id='inputHp' placeholder='숫자만 입력해주세요'
                      />
                    </div>
                  </div>
                </li>

              </ul>
              <ul className='dog-info'>
                <div className="sub-title">
                  <h2>-강아지-</h2>
                  <span><i>*</i>(선택)</span>
                </div>
                <li className='dog-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputDogName"><strong>이름</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_dogname' id='inputdogName' placeholder='강아지 이름을 입력해주세요'></input>
                    </div>
                  </div>
                </li>
                <li className='dog-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputDogBirth"><strong>생년월일</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_birth' id='inputbirth' placeholder='강아지 생년월일을 입력해주세요'></input>
                    </div>
                  </div>
                </li>
                <li className='dog-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputBreed"><strong>견종</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_dogbreed' id='inputdogBreed' placeholder='견종을 입력해주세요'></input>
                    </div>
                  </div>
                </li>
                <li className='dog-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputEtc"><strong>특이사항</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input type="text" maxLength='20' name='input_spe' id='inputSpe' placeholder='특이사항을 입력해주세요'></input>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className='service'>
                <div className="sub-title">
                  <h2>-이용약관동의-</h2>
                  <span><i>*</i>(필수)</span>
                </div>
                <li>
                  <label htmlFor="chk1"><input type="checkbox" name='chk1' id='chk1' className='chk-btn' value='이용약관동의' />이용약관동의(필수)</label>
                  <button type='button'><span className='viewTerms'>약관보기</span><img src="./img/signup/arrow-right.png" alt="" /></button>
                </li>
                <li>
                  <label htmlFor="chk2"><input type="checkbox" name='chk2' id='chk2' className='chk-btn' value='개인정보 수집∙이용 동의' />개인정보 수집∙이용 동의(필수)</label>
                  <button type='button'><span className='viewTerms'>약관보기</span><img src="./img/signup/arrow-right.png" alt="" /></button>
                </li>
                <li>
                  <label htmlFor="chk3"><input type="checkbox" name='chk3' id='chk3' className='chk-btn' value='마케팅 수신동의' />마케팅 수신동의(선택)</label>
                  <button type='button'><span className='viewTerms'>약관보기</span><img src="./img/signup/arrow-right.png" alt="" /></button>
                </li>
              </ul>
              <div className="submit-btn">
                <button type='submit'>입학하기</button>
              </div>
            </form>
          </div>
        </div>

      </section>
    </main >
  );
}

