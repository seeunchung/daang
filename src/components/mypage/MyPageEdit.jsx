import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export default function MypageEdit() {

  //강아지 정보 상태관리
  const [dogimg, setDogimg] = useState('');
  const [dogname, setDogname] = useState('');
  const [major, setMajor] = useState('');
  const [birth, setBirth] = useState('');
  const [features, setFeatures] = useState('');
  //견주정보 상태 관리
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();



  //강아지정보 데이터(백엔드 연결)
  useEffect(() => {
    axios({
      url: 'http://localhost:8080/mypage/doginfo',
      method: 'GET'
    })
      .then((res) => {
        const dogInfo = res.data[0]
        setDogname(dogInfo.doginfoName);
        setMajor(dogInfo.doginfoType);
        setBirth(dogInfo.doginfoBirth);
        setFeatures(dogInfo.doginfoMemo);
        setDogimg(dogInfo.dogImg);
      })
      .catch((err) => {
        console.log(`AXIOS 실패! ${err}`);
      });
  }, []);


  //견주정보(jsson 파일)
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



  //이미지 업로드 기능
  const upload = useRef();
  const imgUpload = () => {
    const file = upload.current.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setDogimg(fileUrl)
    };
  }

  //추가된 이미지 삭제 기능
  const removeImage = () => {
    setDogimg(null);
  }

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


  const dogInfoUpdate = () => {
    // 서버로 보낼 데이터 준비
    const updatedInfo = {
      "doginfoNo": 0,
      "doginfoName": dogname,
      "doginfoType": major,
      "doginfoBirth": birth,
      "doginfoMemo": features,
      "dogImg": dogimg,
    };
  
    // 강아지 정보를 업데이트하기 위한 HTTP PUT 요청
    axios.put('http://localhost:8080/mypage/doginfo/update', updatedInfo)
      .then(response => {
        console.log('강아지 정보가 성공적으로 업데이트되었습니다', response.data);
        // 성공적으로 업데이트된 경우 추가적인 작업 수행 가능
        navigate('/mypage');
      })
      .catch(error => {
        console.error('강아지 정보 업데이트 중 오류 발생', error);
        // 오류 처리가 필요한 경우 처리
      });
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

  const handleCancel = () => {
    // 취소 버튼 클릭 시 뒤로가기
    navigate(-1);
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
            {!dogimg ?
              <>
                <img className='idcard_dog' src='./img/mypage/profileicon.png' alt='기본프로필' />
                <input
                  id='dog_input'
                  className='file_input'
                  type='file'
                  ref={upload}
                  onChange={imgUpload}
                  accept='image/*'
                />
                <label className='change_file_input' htmlFor="dog_input" />
              </> :
              <>
                <img className='idcard_dog' src={dogimg ? String(dogimg) : ''} alt='강아지 사진' />
                <input
                  id='dog_input'
                  className='file_input'
                  type='file'
                  ref={upload}
                  onChange={imgUpload}
                  accept='image/*'
                />
                <label className='change_file_input' htmlFor="dog_input" />
                <button className='img_delete_btn' onClick={removeImage}>
                  <img src="./img/dsta/photo_delete_btn.png" alt="" />
                </button>
              </>
            }
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
                <h2 className='infoedit_text'>아이디</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='text'
                    className='id_input'
                    value={userid}
                    onChange={handleUseridChange}
                    placeholder='kkumi'
                    readOnly
                    disabled={true}
                  />
                </div>
              </div>

              {/* 비밀번호 */}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>비밀번호</h2>
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
                <h2 className='infoedit_text'>비밀번호확인</h2>
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
              {/* <button className='password_btn' onClick={handleSubmit}>중복 확인</button> */}

              {/* 이름 */}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>이름</h2>
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

              {/* 이메일 */}
              <div className='infoedit_div'>
                <h2 className='infoedit_text'>이메일</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='text'
                    className='infoedit_input'
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder='예 DaaNG@naver.com'
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
                <h2 className='infoedit_text'>휴대폰</h2>
                <div className='infoedit_textbox'>
                  <input
                    type='text'
                    className='infoedit_input'
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder='숫자만 입력해 주세요'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='btn_box2'>
            <button className='unregister_btn' type='submit'>회원 탈퇴</button>
            <div>
              <button className='completion_btn' type='submit' onClick={dogInfoUpdate}>완료</button>
              <button className='cancel_btn' type='reset' onClick={handleCancel}>취소</button>
            </div>
          </div>
        </div>
      </div >
    </main >
  );
};