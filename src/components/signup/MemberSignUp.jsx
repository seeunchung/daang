import React, { useState } from 'react';
import SignUp from './SignUp'
import ConfirmModal from './ConfirmModal'
import AgreetoTermsofUseModalComponent from './AgreetoTermsofUseModalComponent'
import RequirePersoanlInfomationModalComponent from './RequirePersoanlInfomationModalComponent'
import SelectPersoanlInfomationModalComponent from './SelectPersoanlInfomationModalComponent'

export default function MemberSignUp() {

  // confirmModal의 상태 변수 함수
  const [isConfirmModal, setIsConfirmModal] = useState({
    isConfirmModal: false,
    msg: '',
    isTimer: false,
  });
  // confirmModal의 상태 변경 (열기) 함수
  const isConfirmModalOpenFn = (msg) => {
    setIsConfirmModal({
      ...isConfirmModal,
      isConfirmModal: true,
      msg: msg
    })
  }
  // confirmModal의 상태 변경 (닫기) 함수
  const isConfirmModalCloseFn = () => {

    setIsConfirmModal({
      ...isConfirmModal,
      isConfirmModal: false,
      msg: '',
    })
  }
  // 이용약관동의(필수) 상태 변수 함수
  const [isAgreeToTermsOfUseModal, setIsAgreeToTermsOfUseModal] = useState(false)
  // 이용약관동의(필수) 열기 함수
  const isAgreeToTermsOfUseModalOpenFn = () => {
    setIsAgreeToTermsOfUseModal({
      ...isAgreeToTermsOfUseModal,
      isAgreeToTermsOfUseModal: true
    })
  }
  // 이용약관동의(필수) 닫기 버튼 함수
  const isAgreeToTermsOfUseModalCloseFn = () => {
    setIsAgreeToTermsOfUseModal({
      ...isAgreeToTermsOfUseModal,
      isAgreeToTermsOfUseModal: false
    })
  }

  // 개인정보수집동의 (필수) 상태 변수 함수
  const [isRequiredModal, setIsRequiredModal] = useState(false)

  // 개인정보수집 동의 (필수) 열기 함수
  const isRequiredModalOpenFn = () => {
    setIsRequiredModal({
      ...isRequiredModal,
      isRequiredModal: true
    })
  }

  // 개인정보수집 동의 (필수) 닫기 함수
  const isRequiredModalCloseFn = () => {
    setIsRequiredModal({
      ...isRequiredModal,
      isRequiredModal: false
    })
  }

  // 개인정보수집동의 (선택) 상태 변수 함수
  const [isSelectModal, setIsSelectModal] = useState(false);

  // 개인정보수집동의 (선택) 열기 함수
  const isSelectModalOpenFn = () => {
    setIsSelectModal({
      ...isSelectModal,
      isSelectModal: true
    })
  }

  // 개인정보수집동의 (선택) 닫기 함수
  const isSelectModalCloseFn = () => {
    setIsSelectModal({
      ...isSelectModal,
      isSelectModal: false
    })
  }
  return (
    <>
      <SignUp isConfirmModalOpenFn={isConfirmModalOpenFn} 
      isAgreeToTermsOfUseModalOpenFn={isAgreeToTermsOfUseModalOpenFn}
      isRequiredModalOpenFn={isRequiredModalOpenFn}
      isSelectModalOpenFn={isSelectModalOpenFn} />
      {
        isConfirmModal.isConfirmModal && <ConfirmModal msg={isConfirmModal.msg} isConfirmModalCloseFn={isConfirmModalCloseFn} />
        
      }
      {isAgreeToTermsOfUseModal.isAgreeToTermsOfUseModal && <AgreetoTermsofUseModalComponent isAgreeToTermsOfUseModalCloseFn={isAgreeToTermsOfUseModalCloseFn} />}
      {isRequiredModal.isRequiredModal && <RequirePersoanlInfomationModalComponent isRequiredModalCloseFn={isRequiredModalCloseFn} />}
      {isSelectModal.isSelectModal && <SelectPersoanlInfomationModalComponent isSelectModalCloseFn={isSelectModalCloseFn} />}
    </>
  );
};