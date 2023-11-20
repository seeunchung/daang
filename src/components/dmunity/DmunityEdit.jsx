import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function DmunityEdit() {
  const [inputValue, setInputValue] = useState('강아지 영양제 뭐 먹이시나요'); //제목 입력값 관리
  const [editorData, setEditorData] = useState('<p>강아지 나이랑 영양제 좀 알려주세요</p>'); // 에디터 입력값 관리
  const [selectedCategory, setSelectedCategory] = useState('eat'); // 카테고리 입력값 관리


  //제목 값 변경 시 작동
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  //에디터 내용 변경시 작동 
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    setEditorData(data);
  };
  //카테고리 변경 시 작동
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //폼 전송 기능
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제목:', inputValue);
    console.log('내용:', editorData);
    console.log('카테고리:', selectedCategory);
    // 데이터를 서버로 보내는 로직 추가
  };


  const SelectBox = () => {
    return (
      <select className='dmbox' onChange={handleCategoryChange} value={selectedCategory}>
        <option key="category" value="category">
          카테고리
        </option>
        <option key="eat" value="eat">먹어요</option>
        <option key="sick" value="sick">아파요</option>
        <option key="play" value="play">놀아요</option>
        <option key="how" value="how">어때요</option>
        <option key="etc" value="etc">기타</option>
      </select>
    );
  };

  return (

    <main id="main" className='dmunitywrite_write'>
      <div className='dmunitywrite_container'>
        <h2 className='dmunitywrite_title'>
        <img src='./img/dmunity/writing.png' alt='수정아이콘' />
          댕뮤니티 수정하기
        </h2>
        <form className='dmunitywrite_form' onSubmit={handleSubmit}>
          <div className='searchBox'>
            <SelectBox ></SelectBox>
            <input
              className='tagcontent'
              type='text'
              placeholder='제목을 입력하세요'
              onChange={handleInputChange}
              value={inputValue}
            />
          </div>
          <div className="textarea">
            <CKEditor
              editor={ClassicEditor}
              placeholder="Hello from CKEditor 5!"
              data={editorData} // 저장된 값 불러오기
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={handleEditorChange}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <div className='button_box'>
            <button className='submit_btn' type='submit'>완료</button>
            <Link to="/dmunity"><button className='cancel_btn'>취소</button></Link>
          </div>

        </form>
      </div>
    </main>
  );
};