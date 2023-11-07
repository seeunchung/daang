import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function MypageEdit() {

  const [dogimg, setDogimg] = useState('');
  const [dogname, setDogname] = useState('');
  const [major, setMajor] = useState('');
  const [birth, setBirth] = useState('');
  const [features, setFeatures] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {

    //마이페이지 데이터
    axios({
      url: './data/mypage.json',
      method: 'GET'
    })

      //성공
      .then((res) => {
        const mypageData = res.data.mypageData[0];
        // 데이터를 상태에 설정
        setDogimg(mypageData.dogimg);
        setDogname(mypageData.dogname);
        setMajor(mypageData.major);
        setBirth(mypageData.birth);
        setFeatures(mypageData.features);
        setUserid(mypageData.userid);
        setPassword(mypageData.password);
        setName(mypageData.name);
        setNickname(mypageData.nickname);
        setPhone(mypageData.phone);
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });
  }, []);

  const handleDogimgChange = (e) => {
    setDogimg(e.target.value);
  };

  const handleDognameChange = (e) => {
    setDogname(e.target.value);
  };

  const handleMajorChange = (e) => {
    setMajor(e.target.value);
  };

  const handleBirthChange = (e) => {
    setBirth(e.target.value);
  };

  const handleFeaturesChange = (e) => {
    setFeatures(e.target.value);
  };

  const handleUseridChange = (e) => {
    setUserid(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(null); // 에러 초기화
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    setPasswordError(null); // 에러 초기화
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = () => {
    if (password !== passwordConfirm) {
      setPasswordMatch(false);
      setPasswordError(true);
    } else {
      setPasswordMatch(true);
      setPasswordError(false);
    }
  };

  return (
    <main id='mypage' className='mypageedit'>
      <div className='mypageedit_container'>
        <div className='mypageedit_titlecontainer'>
          <img src="./img/mypage/mypage_dog.png" alt="강아지 아이콘" />
          <h2 className='mypageedit_title'>Edit Info.</h2>
        </div>
        <img className='page_prev' src='./img/mypage/idcard_page.png' alt='<버튼'></img>
        <img className='page_next' src='./img/mypage/idcard_page.png' alt='>버튼'></img>
        <div className='mypageedit_idcard'>
          <div className='mypageedit_idcardhead'>
            <div className='mypageedit_headcontainer'>
              <img src="./img/mypage/idcard_dog.png" alt="강아지 메인 학생증 선택 아이콘" />
              <h2 className='mypageedit_headtitle'>STUDENT</h2>
            </div>
          </div>
          <img className='idcard_stamp' src='./img/mypage/idcard_stamp.png' alt="학생증 도장" />
          <div className='idcard_bodycontainer'>
            <img className='idcard_dog' src={dogimg} alt='강아지 사진' />
            <div className='idcard_info'>
              <div>
                <h2 className='idcard_infotext'>이름 :</h2>
                <div className='idcard_infobox'>
                  <input
                    type='text'
                    className='info_input'
                    value={dogname}
                    onChange={handleDognameChange}
                    placeholder='2 - 10자 이내 한글 및 영문 작성'
                  />
                </div>
              </div>
              <div>

                <h2 className='idcard_infotext'>학과 :</h2>
                <div className='idcard_infobox'>
                  <input
                    type='text'
                    className='info_input'
                    value={major}
                    onChange={handleMajorChange}
                    placeholder='강아지 종류 작성'
                  />
                </div>
              </div>
              <div>
                <h2 className='idcard_infotext'>학번 :</h2>
                <div className='idcard_infobox'>
                  <input
                    type='text'
                    className='info_input'
                    value={birth}
                    onChange={handleBirthChange}
                    placeholder='강아지 생년월일 ex)20231212'
                  />
                </div>
              </div>
              <div>
                <h2 className='idcard_infotext'>특징 :</h2>
                <div className='idcard_infobox'>
                  <input
                    type='text'
                    className='info_input'
                    value={features}
                    onChange={handleFeaturesChange}
                    placeholder='강아지 특징 작성'
                  />
                </div>
              </div>
            </div>
            <div className='idcard_univ'>DAaaNG UNIV</div>
            <img className='idcard_barcode' src='./img/mypage/barcode.png' alt='바코드 사진' />
          </div>
        </div>
        <div className='btn_box'>
          <button className='add_btn' type='submit'>학생증 추가</button>
          <button className='del_btn' type='submit'>학생증 삭제</button>
        </div>
        <div className='infoedit_container'>
          <div className='infoedit_boxtitle'>견주 정보 수정</div>
          <div className='infoedit_box'>
            <div className='infoedit_box2'>

              {/* 아이디 */}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>아이디 :</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='text'
                    className='infoedit_input'
                    value={userid}
                    onChange={handleUseridChange}
                    placeholder='kkumi'
                  />
                </div>
              </div>

              {/* 비밀번호 */}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>비밀번호 :</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='password'
                    className='infoedit_input'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='새 비밀번호 입력 / 8 - 15자 이내 영문 & 숫자 작성'
                  />
                </div>
              </div>

              {/* 비밀번호 확인*/}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>비밀번호 확인 :</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='password'
                    className='infoedit_input'
                    value={passwordConfirm}
                    onChange={handlePasswordConfirmChange}
                    placeholder='새 비밀번호 확인'
                  />
                </div>
              </div>

              {/* 중복확인 메세지 */}
              {passwordError && (
                <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>
              )}
              {passwordMatch && !passwordError && (
                <p style={{ color: 'green' }}>비밀번호가 일치합니다.</p>
              )}

              {/* 중복 확인 버튼 */}
              <button className='password_btn' onClick={handleSubmit}>중복 확인</button>

              {/* 이름 */}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>이름 :</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='text'
                    className='infoedit_input'
                    value={name}
                    onChange={handleNameChange}
                    placeholder='2 - 10자 이내 작성'
                  />
                </div>
              </div>

              {/* 닉네임 */}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>닉네임 :</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='text'
                    className='infoedit_input'
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder='2 - 10자 이내 한글, 영문 작성'
                  />
                </div>
              </div>
              {/* 중복확인 메세지 */}
              {/* {passwordError && (
                <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>
              )}
              {passwordMatch && !passwordError && (
                <p style={{ color: 'green' }}>비밀번호가 일치합니다.</p>
              )} */}

              {/* 중복 확인 버튼 */}
              <button className='nickname_btn' onClick={''}>중복 확인</button>

              {/* 전화번호 */}
              <div className='infoedit_div' style={{ marginBottom: 0 }}>
                <h2 className='infoedit_text'>전화번호 :</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='text'
                    className='infoedit_input'
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder='- 빼고 입력'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='btn_box2'>
            <button className='unregister_btn' type='submit'>회원 탈퇴</button>
            <div>
              <button className='completion_btn' type='submit'>완료</button>
              <button className='cancel_btn' type='reset'>취소</button>
            </div>
          </div>
        </div>
      </div >
    </main >
  );
};