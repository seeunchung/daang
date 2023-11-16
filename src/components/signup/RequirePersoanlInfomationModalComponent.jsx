import React from 'react';

export default function RequirePersoanlInfomationModalComponent({ isRequiredModalCloseFn }) {

  const requiredModalCloseFn = (e) => {
    e.preventDefault();
    isRequiredModalCloseFn();
  }

  return (
    <div id='require'>
      <div className="wrap">
        <div className="container">
          <h1>개인정보 수집·이용 동의(필수)</h1>
          <div className="content">
            <strong className='main-title'>개인정보처리방침</strong>
            'DAaang'(이하 '회사')가 운영하는 ‘DAaang UNIV’은 개인정보보호법 제30조 의거 이용자의 개인정보보호와 권익을 보호하고 관련된 고충 및 애로사항을 신속하게 처리하기 위해 아래의 개인정보처리방침을 제정·운영하고 있습니다.<br/>
회사는 관계법령에서 규정하고 있는 책임과 의무를 준수하고 실천하기 위해 최선의 노력을 하고 있습니다<br/>
시행일 : 2021-05-01

            <strong className='main-title'>제1조 [개인정보 수집이용 및 보유기간 안내]</strong>
            회사는 아래와 같이 제공하는 서비스에 따라 개인정보의 수집목적, 항목, 보유 및 이용기간을 달리하여 서비스제공을 위하여 필요한 최소한의 개인정보를 수집하고 있습니다.
            <strong className='main-title'>회원가입 및 서비스 이용</strong>
            수집목적필수항목선택항목보유·이용기간회원가입 및 이용자 식별이메일,닉네임,비밀번호,신체스펙(키/몸무게),이름,휴대전화번호,생년월일,성별프로필사진수집일로부터 회원탈퇴 까지본인확인이름,통신사,성별,암호화된 이용자 확인값(CI),생년월일,중복가입확인정보(DI),휴대전화번호,내/외국인 여부 수집일로부터 회원탈퇴 까지게시글 및 댓글 관리닉네임,프로필사진 수집일로부터 회원탈퇴 까지계정 정보 찾기 및 재설정이메일,휴대전화번호 수집일로부터 회원탈퇴 까지신고하기이름,닉네임,신고내용 수집일로부터 회원탈퇴 까지서비스관련 각종 고지 안내이름,이메일,휴대전화번호,단말기ID 수집일로부터 회원탈퇴 까지
            <strong className='main-title'>마케팅</strong>
            수집목적필수항목보유·이용기간이벤트 안내이메일,휴대전화번호,닉네임수집일로부터 동의철회 까지
            <strong className='main-title'>기타</strong>
            &gt; <br/>

회사는 만 14세 미만 아동에게 당사의 서비스를 제공하지 않으며 이와 관련한 개인정보를 수집하지 않습니다.<br/>

&gt;<br/>

회사가 처리하는 회원정보의 목적과 항목이 변경될 경우에는 관련법령에 따라 사전에 동의를 요청합니다.<br/>

&gt;<br/>

회사는 주민등록번호 처리를 원칙적으로 금지하며 업무 수행 중 법률, 대통령령, 국회규칙, 대법원규칙,

헌법재판소규칙, 중앙선거관리위원회 규칙 및 감사원규칙에서 구체적으로 주민등록번호의 처리를 요구할 경우에만 처리하고 있습니다.<br/>

&gt;<br/>

회사는 다음의 방식으로 개인정보를 수집하며 수집 전 사전동의를 획득합니다.<br/>

-

서비스 이용 과정에서 이용자가 개인정보를 직접 입력하는 방식<br/>

-

박람회, 세미나, 행사진행 등 오프라인에서 서면으로 개인정보를 수집하는 방식<br/>

-

서비스를 이용하는 과정에 쿠키, 접속로그 등 자동으로 생성 및 수집되는 방식
<strong className='main-title'>2조</strong>
<strong className='main-title'>개인정보자동수집 장치의 설치와 운영거부에 관한 사항</strong>
회사는 서비스 이용과정에서 이용자로부터 다음과 같은 정보들이 자동으로 생성/수집되고 다음의 목적으로 이용될 수 있습니다.
<strong className='main-title'>• 개인정보 자동수집정보 사용목적</strong>
&gt; <br/>

관련법규의 준수

회사는 관련법규의 준수를 위해 이용자의 접속기록(로그인)기록을 보관할 의무가 있습니다.<br/>

&gt;<br/>

서비스 품질향상 및 상품 개발

방문일시,서비스 이용기록,접속IP정보,쿠키, 항목을 수집하며 제공받은 날로부터 계약 종료 까지간 보유이용되며 보유기간 경과후 즉시 삭제됩니다
<strong className='main-title'>• 개인정보 자동수집안내 및 거부방법</strong>
&gt; <br/>

아래의 분석도구를 활용하여 이용자의 주요행동(행태정보)를 수집 및 분석합니다. 수집된 정보로 개인을 알아볼 가능성은 낮습니다.<br/>

수탁사명 : Google Analytics<br/>


쿠키의 설치∙운영 및 거부 방법 : 아래 방법을 통해 쿠키 저장을 거부 할 수 있습니다. <br/>

<p>[web] <br/></p>

 

- Internet Explorer 웹 브라우저의 경우 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정

- Microsoft Edge 웹 브라우저의 경우 : 웹브라우저 상단 메뉴 &gt; 설정 &gt; 고급 설정 보기 &gt; 쿠키 메뉴의 옵션 설정

- Chrome 웹브라우저의 경우 : 웹브라우저 상단 메뉴 &gt; 설정 &gt; 고급 &gt; 콘텐츠 설정 &gt; 쿠키 메뉴의 옵션 설정

- Chrome 모바일의 경우 : 크롬 App &gt; 오른쪽상단 더보기 &gt; 방문 기록 인터넷 사용 기록 삭제 &gt; 기간선택 &gt; 쿠키 및 사이트 데이터'와 '캐시된 이미지 또는 파일' 옆의 체크박스를 선택 &gt; 인터넷 사용기록 삭제

- Safari 모바일의 경우 : Safari App &gt; 방문기록 및 웹사이트 데이터 지우기 &gt; 확인

- Naver 모바일의 경우 : Naver App &gt; 설정 &gt; 캐시삭제 + 인터넷 사용 기록 &gt; 쿠키삭제


          </div>
          <div className="button-box">
            <button type='button' onClick={requiredModalCloseFn}>
              <span>확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};