import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';


export default function DmunityWrite() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(''); //제목 입력값 관리
  const [editorData, setEditorData] = useState(''); // 에디터 입력값 관리
  const [selectedCategory, setSelectedCategory] = useState(''); // 카테고리 입력값 관리


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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버로 데이터 전송
      const response = await axios.post('/dmunity/dmunityWrite', {
        userid: '김땡땡',
        dmunityCategory: selectedCategory,
        dmunityTitle: inputValue,
        dmunityText: editorData,
      });

      // 성공 시 처리
      navigate('/dmunity')
    } catch (error) {
      // 실패 시 처리
      console.error('에러 발생:', error);
    }
  };


  const SelectBox = () => {
    return (
      <select className='dmbox' onChange={handleCategoryChange} value={selectedCategory}>
        <option key="category" value="category">
          카테고리
        </option>
        <option key="eat" value= {1}>먹어요</option>
        <option key="sick" value= {2}>아파요</option>
        <option key="play" value={3}>놀아요</option>
        <option key="how" value={4}>어때요</option>
        <option key="etc" value={5}>기타</option>
      </select>
    );
  };
  return (

    <main id="main" className='dmunitywrite_write'>
      <div className='dmunitywrite_container'>
        <h2 className='dmunitywrite_title'>✨댕뮤니티 작성하기✨</h2>
        <form className='dmunitywrite_form' onSubmit={handleSubmit}>
          <div className='searchBox'>
            <SelectBox ></SelectBox>
            <input
              className='tagcontent'
              type='text'
              placeholder='제목을 입력하세요'
              onChange={handleInputChange}
            />
          </div>
          <div className="textarea">
            <CKEditor
              editor={ClassicEditor}
              placeholder="Hello from CKEditor 5!"
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
