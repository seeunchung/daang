import React from 'react';
import { useNavigate } from "react-router-dom";

  
export default function ConsentToReceiveMarketing() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // -1은 뒤로가기를 의미합니다.
  };

  return (
    <main id="ConsentToReceiveMarketing" className="ctrm">
      <div className='ctrm_container'>
          <div className='ctrm_title'>
            <h1>
              마케팅 수신동의
            </h1>
          </div>
            <div class="ctrm_content_box01">
              <div class="ctrm_content_box02">
              <h2>[ 마케팅 수신동의 ]</h2><p>&nbsp;</p>
              <strong>1. 개인정보의 수집, 이용 목적</strong>
              <p>- 각종 뉴스레터 발송, 브랜드 소개, 맞춤형 서비스 권유 등</p>
              <strong>2. 수집하는 개인정보의 항목</strong>
              <p>- 성명(한글), 생년월일, 전화번호, 이메일, 휴대전화</p>
              <p><strong>3. 개인정보의 보유 및 이용 기간</strong> : 회원 탈퇴 시까지(개인회원 : 2년 단위 재동의, 기업회원 : 5년 단위 재동의)</p>
              <p>단, 법률이 정하는 바에 따라 탈퇴 후에도 일정기간 보유할 수 있습니다.</p>
              <p>4.&nbsp;개인정보 마케팅 활용 동의 거부일 경우에도 회원 가입 제한은 없으나 마케팅 활용 서비스 안내 및 참여에 제한이 있을 수 있습니다.</p>
              <p>5. 유튜브 및 SNS등 2차 활용에 활용될 수 있습니다.</p><p>&nbsp;</p>
              <p>회사는 별도의 동의를 받거나 법률에 특별할 규정이 있는 경우를 제외하면 제3자에게 회원님의 개인정보를 제공하지 않으며, 상기 안내해드린 개인정보 수집 동의 법위를 초과하여 회원의 개인정보를 활용하지 않습니다.</p>
               </div>
               </div>
              <button className='ctrm_appli_button' onClick={goBack} >
              확인</button>
               </div>
               </main>
  );
};