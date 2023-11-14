import React, { useState } from 'react';
import SignUp from './SignUp'
import ConfirmModal from './ConfirmModal'

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
  return (
    <>
      <SignUp isConfirmModalOpenFn={isConfirmModalOpenFn} />
      {
        isConfirmModal.isConfirmModal && <ConfirmModal msg={isConfirmModal.msg} isConfirmModalCloseFn={isConfirmModalCloseFn} />
      }
    </>
  );
};