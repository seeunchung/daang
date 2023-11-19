import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from "./Button";

export default function DmunityWrite() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const SelectBox = () => {
    return (
      <select>
        <option key="banana" value="banana">
          카테고리
        </option>
        <option key="apple" value="apple">먹어요</option>
        <option key="orange" value="orange">아파요</option>
        <option key="orange" value="orange">놀아요</option>
        <option key="orange" value="orange">어때요</option>
        <option key="orange" value="orange">기타</option>
      </select>
    );
  };

  return (

    <main id="main" className='dmunitywrite_write'>
      <div className='dmunitywrite_container'>
        <h2 className='dmunitywrite_title'>✨댕뮤니티 작성하기✨</h2>
        <form className='dmunitywrite_form'>
          <div className='searchBox'>
            <SelectBox className='dmbox'></SelectBox>
            <input className='tagcontent' type='text' placeholder='제목을 입력하세요' />
          </div>
          <div className="textarea">
            <CKEditor
              editor={ClassicEditor}
              placeholder="Hello from CKEditor 5!"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <div className='button_box'>
            <div>
              <Button title='등록' width='80px'
                height="40px" background='#74500A'
                textSize='16px' textColor='white' 
                radius='20px' border='none'
              ></Button>
            </div>
            <div>
              <Button title='취소' width='80px'
                height="40px" background='#AB8B61'
                textSize='16px' textColor='white'
                radius='20px' border='none'
              ></Button>
            </div>
          </div>

        </form>
      </div>


    </main>
  );

};
