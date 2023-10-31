import React from 'react';

// 내부 상자 컴포넌트
function InnerBox({ text }) {
  const innerBoxStyle = {
    border: '1px solid',
    margin: '5px', // 테두리 스타일을 solid로 설정
  };

  return (
    <div style={innerBoxStyle} className="inner-box">
      {text}
    </div>
  );
}

// 외부 상자 컴포넌트
function OuterBox() {
  const outerBoxStyle = {
    border: '1px solid', // 테두리 스타일을 solid로 설정
  };

  return (
    <div style={outerBoxStyle} className="outer-box">
      외부 상자
      <InnerBox text="내부 상자 1" />
      <InnerBox text="내부 상자 2" />
    </div>
  );
}

export default function DstaMainPage() {
  return (
    <main id='main'>
      <div className="container">
        <h2>d스타</h2>
        <OuterBox />
      </div>
    </main>
  );
}
