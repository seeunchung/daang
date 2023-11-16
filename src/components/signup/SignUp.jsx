import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types';


export default function SignUp({ 견주, 강아지, isConfirmModalOpenFn, isAgreeToTermsOfUseModalOpenFn, isRequiredModalOpenFn, isSelectModalOpenFn }) {

  const [state, setState] = useState(견주, 강아지);
  const navigate = useNavigate();

  // 견주 회원가입 이벤트 구현
  // 아이디 이벤트
  const onChangeId = (e) => {

    // 특수문자
    const regExp1 = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
    // 6자 이상 16자 이하
    const regExp2 = /.{6,16}/g;
    // 영문 혹은 영문과 숫자를 조합
    const regExp3 = /(?=.*[A-Za-z])+(?=.*[0-9])*/g;
    // 영문/숫자 앞에 한글이 한글자 이상, 한글 뒤에 영문/숫자가 한글자 이상
    const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
    // 공백
    const regExp5 = /\s/g;
    // 영문/숫자 앞에 한글이 한글자 이상, 한글 뒤에 영문/숫자가 한글자 이상
    const regExp6 = /([a-zA-Z0-9])+([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])|([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+([a-zA-Z0-9])/;

    const { value } = e.target;
    let idErrMsg = '';
    let id = value.replace(regExp1, '');
    let isId = false;

    if (value === '') {
      isId = false;
      idErrMsg = '아이디를 입력해 주세요'
    }

    else if (!regExp2.test(id) || !regExp3.test(id)) {
      isId = false;
      idErrMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
      if (regExp4.test(id)) {
        isId = false;
        idErrMsg = '한글은 입력이 불가능합니다.';
      }
      else if (regExp5.test(id)) {
        isId = false;
        idErrMsg = '공백을 사용할 수 없습니다.';
      }
    }
    // 영문 중간에 한글이 오는것을 방지하기 위한 조건문
    else if (regExp6.test(id)) {
      isId = false;
      idErrMsg = '한글은 입력이 불가능 합니다.'
    }
    else {
      isId = true;
    }

    setState({
      ...state,
      id: id,
      isId: isId,
      idErrMsg: idErrMsg
    })

  }

  // 아이디 중복확인 버튼 클릭 이벤트
  const onClickIdOk = (e) => {
    e.preventDefault();

    // 6자 이상 16자 이하
    const regExp1 = /.{6,16}/g;
    // 영문 혹은 영문과 숫자를 조합
    const regExp2 = /(?=.*[A-Za-z])+(?=.*[0-9])*/g;
    // 공백
    const regExp3 = /\s/g;
    // 한글 자모음 및 한글
    const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
    // 영문/숫자 앞에 한글이 한글자 이상, 한글 뒤에 영문/숫자가 한글자 이상
    const regExp5 = /([a-zA-Z0-9])+([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])|([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+([a-zA-Z0-9])/;

    let { id } = state;
    let result = [];
    let isIdDoubleCheck = false;

    if (!regExp1.test(id) || !regExp2.test(id) || regExp3.test(id)) {
      isConfirmModalOpenFn('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합')
      if (regExp4.test(id) === true) {
        isConfirmModalOpenFn('아이디에 한글을 사용할 수 없습니다. 영문 혹은 영문, 숫자를 조합');
      }
    } else if (regExp5.test(id)) {
      isConfirmModalOpenFn('아이디에 한글을 사용할 수 없습니다.');
    }
    else {
      axios({
        url: 'https://kiik52.com/daaang/member_select.php',
        method: 'GET'
      })
        .then((res => {
          result = res.data.map((item) => item.id === state.id);

          if (result.includes(true)) {
            isConfirmModalOpenFn('이미 등록된 아이디 입니다.');
            isIdDoubleCheck = false;
          }
          else {
            isConfirmModalOpenFn('사용할 수 있는 아이디 입니다.');
            isIdDoubleCheck = true;
          }
          setState({
            ...state,
            isIdDoubleCheck: isIdDoubleCheck
          })
        }))
        .catch((err) => {
          console.log('AXIOS 실패', err)
        })
    }
  }

  // 비밀번호 이벤트
  const onChangePw = (e) => {

    // 10자 이상
    const regExp1 = /.{10,}/g;
    // 최소한 하나 이상의 영문자(대문자 또는 소문자), 영문자, 숫자, 특수문자의 조합
    const regExp2 = /^(?=.*[A-Za-z])(?=.*[0-9`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?])([A-Za-z0-9`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]+)$/;
    // 공백
    const regExp3 = /\s/g;
    //동일한 숫자 3개 이상 연속 사용 불가
    const regExp4 = /(\d)\1\1/g;

    const { value } = e.target;
    let isPw = false;
    let pwErrMsg = '';

    if (value === '') {
      isPw = false;
      pwErrMsg = '비밀번호를 입력해 주세요'
    } else if (!regExp1.test(value)) {
      isPw = false;
      pwErrMsg = '최소 10자 이상 입력해 주세요.';
    } else if (!regExp2.test(value) || regExp3.test(value)) {
      isPw = false;
      pwErrMsg = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합해 주세요.';
    } else if (regExp4.test(value)) {
      isPw = false;
      pwErrMsg = '동일한 숫자를 3개 이상 연속 사용할 수 없습니다.'
    }
    else {
      isPw = true;
      pwErrMsg = '';
    }

    setState({
      ...state,
      pw: value,
      isPw: isPw,
      pwErrMsg: pwErrMsg
    })
  }

  // 비밀번호 중복체크 이벤트
  const onChangePwOk = (e) => {
    const { value } = e.target
    let pwDoubleCheckErrMsg = '';
    let isPwDoubleCheck = false;

    if (value === '') {
      isPwDoubleCheck = false;
      pwDoubleCheckErrMsg = '설정한 비밀번호를 입력해 주세요'
    }

    else if (state.pw !== value) {
      isPwDoubleCheck = false;
      pwDoubleCheckErrMsg = '동일한 비밀번호를 입력해 주세요'
    }
    else {
      isPwDoubleCheck = true;
      pwDoubleCheckErrMsg = '';
    }

    setState({
      ...state,
      pwDoubleCheck: value,
      isPwDoubleCheck: isPwDoubleCheck,
      pwDoubleCheckErrMsg: pwDoubleCheckErrMsg
    })
  }

  // 견주 이름 이벤트
  const onChangeName = (e) => {

    // 특수문자
    const regExp1 = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
    // 영어만
    const regExp2 = /[A-Za-z]+/g;
    // 공백
    const regExp3 = /\s/g;

    const { value } = e.target;
    let name = value.replace(regExp1, '');
    let isName = false;
    let nameErrMsg = '';

    if (name === '') {
      isName = false;
      nameErrMsg = '이름을 입력해 주세요';
    }
    else if (regExp2.test(name) || regExp3.test(name)) {
      isName = false;
      nameErrMsg = '한글(공백제외)을 입력해 주세요';
    }
    else {
      isName = true;
      nameErrMsg = '';
    }

    setState({
      ...state,
      name: name,
      isName: isName,
      nameErrMsg: nameErrMsg
    })
  }

  // 이메일 이벤트
  const onChangeEmail = (e) => {

    // 공백
    const regExp1 = /\s/g;
    // 이메일 주소 검사
    const regExp2 = /^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*@[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*\.[A-Za-z]{2,3}$/g;
    // 특수문자 찾거나 대체할 때 사용
    const regExp3 = /[@()\\[\]":;,<>]/g;

    const { value } = e.target;
    let isEmail = false;
    let emailErrMsg = '';

    if (value === '') {
      isEmail = false;
      emailErrMsg = '이메일을 입력해 주세요';
    }
    else if (regExp1.test(value) || !regExp2.test(value) || !regExp3.test(value)) {
      isEmail = false;
      emailErrMsg = '이메일 형식으로 입력해 주세요'
    }
    else {
      isEmail = true;
      emailErrMsg = '';
    }

    setState({
      ...state,
      email: value,
      isEmail: isEmail,
      emailErrMsg: emailErrMsg
    })
  }

  // 이메일 중복확인 버튼 클릭 이벤트
  const onClickEmailOk = (e) => {
    e.preventDefault();


    // 공백
    const regExp1 = /\s/g;
    // 이메일 주소 검사
    const regExp2 = /^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*@[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]*\.[A-Za-z]{2,3}$/g;
    // 특수문자 찾거나 대체할 때 사용
    const regExp3 = /[@()\\[\]":;,<>]/g;

    const { email } = state;
    let isEmailDoubleCheck = false;
    let result = [];

    if (email === '') {
      isConfirmModalOpenFn('이메일을 입력해 주세요');
      isEmailDoubleCheck = false;
    } else if (regExp1.test(email || !regExp2.test(email) || !regExp3.test(email))) {
      isConfirmModalOpenFn('이메일 형식으로 입력해 주세요');
      isEmailDoubleCheck = false;
    }
    else {
      axios({
        url: 'https://kiik52.com/daaang/member_select.php',
        method: 'GET'
      })
        .then((res) => {
          result = res.data.map((item) => item.email === state.email);
          if (result.includes(true)) {
            isConfirmModalOpenFn('이미 등록된 이메일 입니다.');
            isEmailDoubleCheck = false;
          }
          else {
            isConfirmModalOpenFn('사용 가능한 이메일 입니다.');
            isEmailDoubleCheck = true;
          }
          setState({
            ...state,
            isEmailDoubleCheck: isEmailDoubleCheck
          })
        })
        .catch((err) => {
          console.log('AXIOS 실패', err);
        })
    }

  }

  // 휴대폰 번호 이벤트
  const onChangeHp = (e) => {

    // 숫자가 아닌것
    const regExp1 = /[^\d]/g

    const { value } = e.target;
    let isHp = false
    let hpErrMsg = '';
    let hp = value.replace(regExp1, '');

    if (value.length > 1) {
      isHp = true
    }
    else {
      isHp = false;
    }
    if (state.isAnotherHp && hp.length === 0) {
      hpErrMsg = '휴대폰 번호를 입력해 주세요'
    }

    setState({
      ...state,
      hp: hp,
      isHp: isHp,
      hpErrMsg: hpErrMsg
    })
  }

  // 휴대폰 인증번호 받기 버튼 클릭 이벤트
  const onClickHpCertified = (e) => {
    e.preventDefault();

    // 10~11자리의 01로 시작하는 핸드폰 번호
    const regExp = /^01[0|1|2|6|7|8|9]+[0-9]{3,4}[0-9]{4}$/g;

    let num = Math.floor(Math.random() * 900000 + 100000);
    let isCertificationNumberInputBox = false;
    let isInputHp = false;
    let isHp = false;
    let CertificationNumberInputBox = '';

    if (!regExp.test(state.hp)) {
      isConfirmModalOpenFn('잘못된 휴대폰 번호 입니다. \n 확인 후 다시 시도해 주세요.');
      isCertificationNumberInputBox = false;
      isInputHp = false;
      isHp = true;
    }
    else {
      isConfirmModalOpenFn(`인증번호가 발송되었습니다. \n ${num}`);
      isCertificationNumberInputBox = true;
      isInputHp = true;
      isHp = false;
      CertificationNumberInputBox = '';
    }

    setState({
      ...state,
      CertificationNumber: num,
      CertificationNumberInputBox: CertificationNumberInputBox,
      isCertificationNumberInputBox: isCertificationNumberInputBox,
      isHp: isHp,
      isInputHp: isInputHp
    });

  }

  // 인증번호 입력상자 이벤트
  const onChangeCertificationNumberInputBox = (e) => {
    const { value } = e.target;
    const regExp1 = /[^\d]/g;
    let CertificationNumberInputBox = value.replace(regExp1, "");
    let isHpNumOkBtn = false;

    if (value.length >= 1) {
      clearInterval(state.setId);
    }

    // 공백도 1을 포함하기 때문에 1이상이 아니 1보다 커야한다.
    if (CertificationNumberInputBox.length >= 1) {
      isHpNumOkBtn = true;
    }
    else {
      isHpNumOkBtn = false;
    }

    setState({
      ...state,
      CertificationNumberInputBox: CertificationNumberInputBox,
      isHpNumOkBtn: isHpNumOkBtn
    })
  }

  // 인증번호 확인 버튼 클릭 이벤트 구현
  const onClickHpOkBtn = (e) => {
    e.preventDefault();
    let isHpCertified = false;
    let isCertificationNumberInputBox = true;
    let isAnotherHp = false;
    let isHpNumOkBtn = false;
    let isHp = false;

    if (Number(state.CertificationNumberInputBox) === state.CertificationNumber) {
      isConfirmModalOpenFn('인증에 성공 하였습니다.');
      isCertificationNumberInputBox = false;
      isHpCertified = true;
      isAnotherHp = true;
      isHp = true;
    } else {
      isConfirmModalOpenFn('잘못된 인증 코드 입니다.');
      isCertificationNumberInputBox = true;
      isHpCertified = false;
      isAnotherHp = false;
      isHp = false;
    }
    setState({
      ...state,
      isHp: isHp,
      isHpNumOkBtn: isHpNumOkBtn,
      isCertificationNumberInputBox: isCertificationNumberInputBox,
      isAnotherHp: isAnotherHp,
      isHpCertified: isHpCertified
    })
  }

  // 다른번호 인증 버튼 클릭 이벤트 구현
  const onClickAnotherHpBtn = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isInputHp: false,
      isAnotherHp: false,
      isHpNumOkBtn: false,
      isHp: true,
      hp: '',
      hpErrMsg: '휴대폰 번호를 입력해주세요.'

    })
  }

  // 이용약관동의 이벤트
  const onChangeService = (e) => {
    const { value, checked } = e.target;
    let filteredAgreements = [];

    if (checked === true) {
      setState({
        ...state,
        AgreetoTermsofUse: [...state.AgreetoTermsofUse, value]
      });
    }
    else {
      filteredAgreements = state.AgreetoTermsofUse.filter((item) => item !== value);
      setState({
        ...state,
        AgreetoTermsofUse: filteredAgreements
      });
    }
  }
  const onClickAgree = (e)=>{
    e.preventDefault();
    isAgreeToTermsOfUseModalOpenFn();
  }
  const onClickAgree2 = (e)=>{
    e.preventDefault();
    isRequiredModalOpenFn();
  }
  const onClickAgree3 = (e)=>{
    e.preventDefault();
    isSelectModalOpenFn();
  }



  // 강아지 회원가입 이벤트 구현
  // 강아지 이름 입력 이벤트
  const onChangeDogName = (e) => {
    // 특수문자
    const regExp1 = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
    // 영어만
    const regExp2 = /[A-Za-z]+/g;
    // 공백
    const regExp3 = /\s/g;

    const { value } = e.target;
    let dogName = value.replace(regExp1, '');
    let isDogName = false;
    let dogNameErrMsg = '';

    if (dogName === '') {
      isDogName = false;
      dogNameErrMsg = '강아지의 이름을 입력해 주세요'
    }

    else if (regExp2.test(dogName) || regExp3.test(dogName)) {
      isDogName = false;
      dogNameErrMsg = '한글(공백 제외)을 입력해 주세요';
    }
    else {
      isDogName = true;
      dogNameErrMsg = '';
    }

    setState({
      ...state,
      dogName: dogName,
      isDogName: isDogName,
      dogNameErrMsg: dogNameErrMsg
    })
  }

  // 강아지 생년 이벤트
  const onChangeDogYear = (e) => {
    const regExp1 = /[^\d]/g;
    const { value } = e.target;
    const dogBirthYear = value.replace(regExp1, '');

    setState({
      ...state,
      dogBirthYear: dogBirthYear,
    })
  }
  // 강아지 생월 이벤트
  const onChangeDogMonth = (e) => {
    const regExp1 = /[^\d]/g;
    const { value } = e.target;
    const dogBirthMonth = value.replace(regExp1, '');

    setState({
      ...state,
      dogBirthMonth: dogBirthMonth,
    })
  }
  // 강아지 생일 이벤트
  const onChangeDogDate = (e) => {
    const regExp1 = /[^\d]/g;
    const { value } = e.target;
    const dogBirthDate = value.replace(regExp1, '');

    setState({
      ...state,
      dogBirthDate: dogBirthDate,
    })
  }
  useEffect(() => {

    // 현재년도  숫자
    const newYear = new Date().getFullYear();
    // 생월 01 ~ 09 또는 1 ~ 9 | 10 11 12
    const regExp2 = /^(?:0?[1-9]|1[0-2])$/g;
    // 생월 01 ~ 09 또는 1 ~ 9 | 10 ~ 19 | 20~29| 30-31
    const regExp3 = /^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g;
    let isDogBirth = false;
    let dogBirthErrMsg = '';

    if (state.dogBirthYear === '' && state.dogBirthMonth === '' && state.dogBirthDate === '') {
      isDogBirth = false;
      dogBirthErrMsg = '';
    }
    else {
      if (Number(state.dogBirthYear) > newYear) {
        isDogBirth = false;
        dogBirthErrMsg = '생년월일이 미래로 입력 되었습니다.';
      }
      else if (Number(state.dogBirthYear) < newYear - 100) {
        isDogBirth = false;
        dogBirthErrMsg = '생년월일을 다시 확인해주세요.';
      }
      else {
        if (regExp2.test(state.dogBirthMonth) === false) {
          // false로 하면 초기 errmsg가 생기는 오류로 인해 true로 설정
          isDogBirth = true;
          dogBirthErrMsg = '태어난 월을 정확하게 입력해 주세요.'
        }
        else {
          if (regExp3.test(state.dogBirthDate) === false) {
            isDogBirth = false;
            dogBirthErrMsg = '태어난 일을 정확하게 입력해 주세요.'
          }
          else {
            isDogBirth = true;
            dogBirthErrMsg = ''
          }
        }
      }
    }
    setState({
      ...state,
      isDogBirth: isDogBirth,
      dogBirthErrMsg: dogBirthErrMsg
    });

  }, [state.dogBirthYear, state.dogBirthMonth, state.dogBirthDate])


  // 강아지 견종 이벤트
  const onChangeDogBreed = (e) => {

    // 특수문자
    const regExp1 = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
    // 영어만
    const regExp2 = /[A-Za-z]+/g;
    // 공백
    const regExp3 = /\s/g;

    const { value } = e.target;
    let isDogBreed = false;
    let dogBreedErrMsg = '';
    let dogBreed = value.replace(regExp1, '');

    if (regExp2.test(dogBreed) || regExp3.test(dogBreed)) {
      isDogBreed = false;
      dogBreedErrMsg = '한글(공백 제외)을 입력해 주세요';
    }
    else {
      isDogBreed = true;
      dogBreedErrMsg = '';
    }

    setState({
      ...state,
      dogBreed: dogBreed,
      isDogBreed: isDogBreed,
      dogBreedErrMsg: dogBreedErrMsg

    })

  }

  // 강아지 한줄소개 이벤트
  const onChangeDogInfo = (e) => {

    // 특수문자
    const regExp1 = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
    // 영어만
    const regExp2 = /[A-Za-z]+/g;
    // 공백
    const regExp3 = /\s/g;

    const { value } = e.target;
    let dogInfo = value.replace(regExp1, '');
    let isDogInfo = false;
    let dogInfoErrMsg = '';

    if (dogInfo === '') {
      isDogInfo = false;
      dogInfoErrMsg = '강아지의 소개를 입력해 주세요';
    }
    else if (regExp2.test(dogInfo) || regExp3.test(dogInfo)) {
      isDogInfo = false;
      dogInfoErrMsg = '한글(공백제외)을 입력해 주세요';
    }
    else {
      isDogInfo = true;
      dogInfoErrMsg = '';
    }

    setState({
      ...state,
      dogInfo: dogInfo,
      isDogInfo: isDogInfo,
      dogInfoErrMsg: dogInfoErrMsg
    })

  }

  // 가입하기 버튼 클릭 이벤트
  const onSubmitJoin = (e) => {
    e.preventDefault();

    let count = 0;
    state.AgreetoTermsofUse.map((item) => {
      if (item.indexOf('필수') !== -1) {
        count++;
      }
    });
    // if (state.id === '') {
    //   isConfirmModalOpenFn('아이디를 입력해 주세요');
    // }
    // else if (!state.isIdDoubleCheck) {
    //   isConfirmModalOpenFn('아이디 중복 체크를 해주세요');
    // }
    // else if (state.pw === '') {
    //   isConfirmModalOpenFn('비밀번호를 입력해 주세요');
    // }
    // else if (state.pwDoubleCheck === '') {
    //   isConfirmModalOpenFn('한번더 비밀번호를 입력해 주세요');
    // }
    // else if (state.name === '') {
    //   isConfirmModalOpenFn('이름을 입력해 주세요');
    // }
    // else if (state.email === '') {
    //   isConfirmModalOpenFn('이메일을 입력해 주세요');
    // }
    // else if (!state.isEmailDoubleCheck) {
    //   isConfirmModalOpenFn('이메일 중복 체크를 해주세요');
    // }
    // else if (state.hp === '') {
    //   isConfirmModalOpenFn('휴대폰 번호를 입력해 주세요');
    // }
    // else if (!state.isHpCertified) {
    //   isConfirmModalOpenFn('휴대폰 인증을 입력해 주세요');
    // }
    // else if (count !== 2) {
    //   isConfirmModalOpenFn('이용약관동의 필수 항목을 체크해 주세요');
    // }
    // else {
    const regExp = /^(\d{3})(\d{3,4})(\d{4})$/g;

    const newFormData = new FormData();

    newFormData.append('id', state.id);
    newFormData.append('pw', state.pw);
    newFormData.append('irum', state.name);
    newFormData.append('email', state.email);
    newFormData.append('hp', state.hp.replace(regExp, '$1-$2-$3'));
    newFormData.append('dog_Name', state.dogName);
    newFormData.append('dog_Birth', `${state.dogBirthYear}-${state.dogBirthMonth}-${state.dogBirthDate}`);
    newFormData.append('dog_Breed', state.dogBreed);
    newFormData.append('dog_Info', state.dogInfo);
    newFormData.append('service', state.AgreetoTermsofUse);
    newFormData.append('join_date', `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);

    axios({
      url: 'https://kiik52.com/daaang/member_insert.php',
      method: 'POST',
      data: newFormData
    })
      .then((res) => {
        if (res.data.indexOf('성공')) {
          navigate("/signup-complete");
        }
      })
      .catch((err) => {
        console.log('AXOIS 실패', err);
      })
    // }
  }

  return (
    <main id='signup' className="signup_main">
      <section id="signup-sec">
        <div className="signup-container">
          <div className="title">
            <div className="main-title">
              <img src="./img/signup/입학신청서 제목.png" alt="" />
            </div>
          </div>
          <div className="content master">
            <form name='form_sign_up'>
              <ul className='user-info'>
                <div className='sub-title'>
                  <h2>-견주-</h2>
                  <span><i>*</i>(필수)</span>
                </div>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputId"><strong>아이디</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type="text"
                        maxLength='16'
                        name='input_id'
                        id='inputId'
                        placeholder='아이디를 입력해주세요'
                        onChange={onChangeId}
                        value={state.id}
                      />
                      <button
                        type="button"
                        className='id-ok-btn'
                        onClick={onClickIdOk}
                      >
                        중복확인</button>
                      <p className={`err-msg${state.isId ? '' : ' on'}`}>{state.idErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor='inputPw1'><strong>비밀번호</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type='password'
                        maxLength='16'
                        name='input_pw1'
                        id='inputPw1'
                        autoComplete='off'
                        placeholder='비밀번호를 입력해주세요'
                        onChange={onChangePw}
                        value={state.pw}
                      />
                      <p className={`err-msg${state.isPw ? '' : ' on'}`}>{state.pwErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor='inputPw2'><strong>비밀번호확인</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type='password'
                        maxLength='16'
                        name='input_pw2'
                        id='inputPw2'
                        autoComplete='off'
                        placeholder='비밀번호를 한번 더 입력해주세요'
                        onChange={onChangePwOk}
                      />
                      <p className={`err-msg${state.isPwDoubleCheck ? '' : ' on'}`}>{state.pwDoubleCheckErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputName"><strong>이름</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type="text"
                        maxLength='20'
                        name='input_name'
                        id='inputName'
                        placeholder='이름을 입력해주세요'
                        onChange={onChangeName}
                        value={state.name}
                      />
                      <p className={`err-msg${state.isName ? '' : ' on'}`}>{state.nameErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputEmail"><strong>이메일</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type='text'
                        name="input-email"
                        id="inputEmail"
                        placeholder="예: daaang@naver.com"
                        onChange={onChangeEmail}
                        value={state.email}
                      />
                      <button
                        type="button"
                        className='email-ok-btn'
                        onClick={onClickEmailOk}
                      >중복확인</button>
                      <p className={`err-msg ${state.isEmail ? '' : ' on'}`}>{state.emailErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className='user-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputHp"><strong>휴대폰</strong><i>*</i></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type="text"
                        disabled={state.isInputHp}
                        maxLength="11"
                        name="input-hp"
                        id="inputHp"
                        placeholder="숫자만 입력해 주세요."
                        onChange={onChangeHp}
                        value={state.hp}
                      />
                      <button
                        disabled={!state.isHp}
                        type="button"
                        className={`hp-num-btn${state.isHp ? ' on' : ''}`}
                        onClick={onClickHpCertified}
                      >인증번호 받기</button>
                      <button
                        type="button"
                        className={`hp-num2-btn${state.isAnotherHp ? ' on' : ''}`}
                        onClick={onClickAnotherHpBtn}
                      >
                        다른번호 인증
                      </button>
                      <p className={`error-message${state.isAnotherHp ? '' : ' on'}`}>{state.hpErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className={`hp-ok-box${state.isCertificationNumberInputBox ? ' on' : ''}`}>
                  <div className="left">
                    <div className="left-wrap">
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type="text"
                        maxLength={6}
                        name='input_hp_ok'
                        id='inputHpOk'
                        placeholder='인증번호를 입력해 주세요.'
                        onChange={onChangeCertificationNumberInputBox}
                        value={state.CertificationNumberInputBox}
                      />
                      <button
                        type="button"
                        className={`hp-num-ok-btn${state.isHpNumOkBtn ? ' on' : ''}`}
                        onClick={onClickHpOkBtn}
                      >인증번호 확인</button>
                      <p className='info-message hp-info-message'>
                        인증번호가 오지 않는다면, 통신사 스팸 차단 서비스 혹은 휴대폰 번호 차단 여부를 확인해주세요.
                      </p>
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
                      <input
                        type="text"
                        maxLength='10'
                        name='input_dog_name'
                        id='inputDogName'
                        placeholder='강아지 이름을 입력해주세요'
                        onChange={onChangeDogName}
                        value={state.dogName}
                      />
                      <p className={`err-msg${state.isDogName ? '' : ' on'}`}>{state.dogNameErrMsg}</p>
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
                    <div className="right-wrap birth">
                      <div className="birth-box">
                        <ul>
                          <li><input
                            type="text"
                            name="year"
                            id="year"
                            placeholder="YYYY"
                            maxLength={4}
                            onChange={onChangeDogYear}
                            value={state.dogBirthYear}
                          /></li>
                          <li><i>/</i></li>
                          <li><input
                            type="text"
                            name="month"
                            id="month"
                            placeholder="MM"
                            maxLength={2}
                            onChange={onChangeDogMonth}
                            value={state.dogBirthMonth}
                          /></li>
                          <li><i>/</i></li>
                          <li><input
                            type="text"
                            name="date"
                            id="date"
                            placeholder="DD"
                            maxLength={2}
                            onChange={onChangeDogDate}
                            value={state.dogBirthDate}
                          /></li>
                        </ul>
                      </div>
                      <p className={`err-msg${state.isBirth ? '' : ' on'}`}>{state.dogBirthErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className='dog-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputDogBreed"><strong>견종</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type="text"
                        maxLength='20'
                        name='input_dog_breed'
                        id='inputDogBreed'
                        placeholder='견종을 입력해주세요'
                        onChange={onChangeDogBreed}
                      />
                      <p className={`err-msg${state.isDogBreed ? '' : ' on'}`}>{state.dogBreedErrMsg}</p>
                    </div>
                  </div>
                </li>
                <li className='dog-li'>
                  <div className="left">
                    <div className="left-wrap">
                      <label htmlFor="inputDogInfo"><strong>한줄소개</strong></label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="right-wrap">
                      <input
                        type="text"
                        maxLength='30'
                        name='input_dog_info'
                        id='inputDogInfo'
                        placeholder='한줄소개를 작성해주세요 (최대 30자)'
                        onChange={onChangeDogInfo}
                      />
                      <p className={`err-msg${state.isDogInfo ? '' : ' on'}`}>{state.dogInfoErrMsg}</p>
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
                  <label htmlFor="chk1"><input type="checkbox" onChange={onChangeService} name='chk1' id='chk1' className='chk-btn' value='이용약관동의(필수)' />이용약관동의(필수)</label>
                  <button type='button' onClick={onClickAgree}><span className='viewTerms'>약관보기</span><img src="./img/signup/arrow-right.png" alt="" /></button>
                </li>
                <li>
                  <label htmlFor="chk2"><input type="checkbox" onChange={onChangeService} name='chk2' id='chk2' className='chk-btn' value='개인정보 수집∙이용 동의(필수)' />개인정보 수집∙이용 동의(필수)</label>
                  <button type='button' onClick={onClickAgree2}><span className='viewTerms'>약관보기</span><img src="./img/signup/arrow-right.png" alt="" /></button>
                </li>
                <li>
                  <label htmlFor="chk3"><input type="checkbox" onChange={onChangeService} name='chk3' id='chk3' className='chk-btn' value='마케팅 수신동의(선택)' />마케팅 수신동의(선택)</label>
                  <button type='button' onClick={onClickAgree3}><span className='viewTerms'>약관보기</span><img src="./img/signup/arrow-right.png" alt="" /></button>
                </li>
              </ul>
              <div className="submit-btn">
                <button type='submit' onClick={onSubmitJoin}>입학하기</button>
              </div>
            </form>
          </div>
        </div>

      </section>
    </main >
  );
}

// props의 자료형 선언하기 : PropTypes
SignUp.propTypes = {
  견주: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isId: PropTypes.bool,
    idErrMsg: PropTypes.string,
    isIdDoubleCheck: PropTypes.bool.isRequired,

    pw: PropTypes.string.isRequired,
    pwErrMsg: PropTypes.string,
    ispw: PropTypes.bool,
    pwDoubleCheck: PropTypes.string.isRequired,
    pwDoubleCheckErrMsg: PropTypes.string,
    isPwDoubleCheck: PropTypes.bool,

    name: PropTypes.string.isRequired,
    nameErrMsg: PropTypes.string,
    isName: PropTypes.bool,

    email: PropTypes.string.isRequired,
    emailErrMsg: PropTypes.string,
    isEmail: PropTypes.bool,
    isEmailDoubleCheck: PropTypes.bool.isRequired,

    hp: PropTypes.string.isRequired,                // number
    isHpCertified: PropTypes.bool.isRequired,          // boolean
    isHp: PropTypes.bool,
    CertificationNumber: PropTypes.number,
    CertificationNumberInputBox: PropTypes.string,
    isCertificationNumberInputBox: PropTypes.bool,
    isInputHp: PropTypes.bool,
    isAnotherHp: PropTypes.bool,
    isHpNumOkBtn: PropTypes.bool,
    hpErrMsg: PropTypes.string,

    AgreetoTermsofUseContent: PropTypes.array,
    AgreetoTermsofUse: PropTypes.array.isRequired,
  }),
  강아지: PropTypes.shape({
    dogName: PropTypes.string.isRequired,
    isDogName: PropTypes.bool,
    dogNameErrMsg: PropTypes.string,

    dogBirthYear: PropTypes.string,
    dogBirthMonth: PropTypes.string,
    dogBirthDate: PropTypes.string,
    isDogBirth: PropTypes.bool,
    dogBirthErrMsg: PropTypes.string,

    dogBreed: PropTypes.string,
    isDogBreed: PropTypes.bool,
    dogBreedErrMsg: PropTypes.string,

    DogInfo: PropTypes.string,
    isDogInfo: PropTypes.bool,
    DogInfoErrMsg: PropTypes.string,
  })
}

// 회원관리의 모든 변수 관리
SignUp.defaultProps = {
  견주: {
    id: '',
    isId: false,
    idErrMsg: '',
    isIdDoubleCheck: false,

    pw: '',
    pwErrMsg: '',
    ispw: false,
    pwDoubleCheck: '',
    pwDoubleCheckErrMsg: '',
    isPwDoubleCheck: false,

    name: '',
    nameErrMsg: '',
    isName: false,

    email: '',
    isEmailDoubleCheck: false,
    emailErrMsg: '',
    isEmail: false,

    hp: '',                     // number
    isHpCertified: false,          // boolean
    isHp: false,
    CertificationNumber: 0,
    CertificationNumberInputBox: '',
    isCertificationNumberInputBox: false,
    isInputHp: false,
    isAnotherHp: false,
    isHpNumOkBtn: false,
    hpErrMsg: '',

    AgreetoTermsofUseContent: [
      `이용약관동의(필수)`,
      `개인정보 수집∙이용 동의(필수)`,
      `마케팅 수신동의(선택)`,
    ],
    AgreetoTermsofUse: [],
  },
  강아지: {
    dogName: '',
    isDogName: false,
    dogNameErrMsg: '',

    dogBirthYear: '',
    dogBirthMonth: '',
    dogBirthDate: '',
    isdogBirth: false,
    dogBirthErrMsg: '',

    dogBreed: '',
    isDogBreed: false,
    dogBreedErrMsg: '',

    dogInfo: '',
    isDogInfo: false,
    dogInfoErrMsg: '',
  }
}
