import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function DstaWrite() {
  const navigate = useNavigate();

  //썸네일 업로드, 이미지 미리보기 기능
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const upload = useRef();
  const imgUpload = () => {
    const file = upload.current.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setThumbnailFile(fileUrl)
    };
  }

  //텍스트 데이터
  const [textData, setTextData] = useState('');
  const handleTextData = (e) => {
    const data = e.target.value;
    setTextData(data);
  }

  //해시태그 데이터
  const [hashTag, setHashTag] = useState('');
  const handleHashTag = (e) => {
    const data = e.target.value;
    setHashTag(data);
  }

  //사진추가 업로드, 이미지 미리보기 기능
  const [addFiles, setAddFiles] = useState([]);
  const uploadAdd = useRef();
  const addImgUpload = () => {
    const file = uploadAdd.current.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setAddFiles((current) => [...current, fileUrl]);
    }
    uploadAdd.current.value = null; //직전에 삭제한 파일 다시 추가할 수 있도록 초기화
  }

  //추가된 사진 삭제 기능
  const removeImage = (index) => {
    const updatedFiles = [...addFiles];
    updatedFiles.splice(index, 1);
    setAddFiles(updatedFiles);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // JSON 데이터 생성
    const data = {
      "userid": 'admin',
      "dstarText": textData,
      "dstarTag": hashTag,
      "dstarThumbnail": thumbnailFile,
    };

    // 추가된 파일이 있다면 json데이터에 추가
    for (let index = 0; index < addFiles.length; index++) {
      data[`dstarImg${index + 1}`] = addFiles[index];
    }

    // Axios를 사용하여 POST 요청
    try {
      const response = await axios.post('/dsta/dstaWrite', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Dsta inserted successfully:', response.data);
      navigate('/dsta');
    } catch (error) {
      console.error('Error inserting Dsta:', error);
      // 에러 처리 로직 추가
    }
  };

  return (

    <main id="main" className='dsta_write'>
      <div className='dstawrite_container'>
        <h2 className='dstawrite_title'>
          <img src='./img/dsta/bling.png' alt='수정아이콘' />
          <span> 댕스타 작성하기 </span>
          <img src='./img/dsta/bling.png' alt='수정아이콘' />
        </h2>
        <div className='spring_img'></div>
        <form className='innerbox' onSubmit={handleSubmit}>
          <div className='leftbox'>
            {/*썸네일 파일 없으면? 썸네일 등록 렌더링 : 있으면 이미지 미리보기,바꾸기 렌더링 */}
            <div className='thumbnail'>
              {!thumbnailFile ? (
                <>
                  <input
                    id='thumbnail_input'
                    className='file_input'
                    type='file'
                    ref={upload}
                    onChange={imgUpload}
                    accept='image/*'
                  />
                  <label className='custom_file_input' htmlFor="thumbnail_input">
                    썸네일 등록
                  </label>
                </>
              ) : (
                <>
                  <img className='thumbnail_img' src={thumbnailFile} alt="Uploaded" />
                  <input
                    id='thumbnail_input'
                    className='file_input'
                    type='file'
                    ref={upload}
                    onChange={imgUpload}
                    accept='image/*'
                  />
                  <label className='change_file_input' htmlFor="thumbnail_input" />
                  <div className='thumbnail_icon'></div>
                </>
              )}
            </div>
          </div>

          <div className='rightbox'>
            <div className='input_contentsbox'>
              <textarea className='textcontent' placeholder='내용을 입력하세요.' onChange={handleTextData} />
              <input className='tagcontent' type='text' placeholder='#해시태그입력' onChange={handleHashTag} />
              <div className='addphoto_box'>
                {addFiles.map((file, index) => {
                  return (
                    <li className='add_photo' key={index}>
                      <img className='added_img' src={file} alt="Uploaded" />
                      <button className='img_delete_btn' onClick={() => removeImage(index)}>
                        <img src="./img/dsta/photo_delete_btn.png" alt="" />
                      </button>
                      <div className='numbering'>{index + 1}/4</div>
                    </li>
                  )
                })}
                {/*추가파일 4개까지만 등록되게 조건 설정. 4개이상이면 버튼생성되지않음 */}
                {addFiles.length < 4 && (
                  <li className='add_photo'>
                    <input
                      id='add_input'
                      className='file_input'
                      type='file'
                      ref={uploadAdd}
                      onChange={addImgUpload}
                      accept='image/*'
                    />
                    <label className='custom_file_input' htmlFor='add_input'>추가 등록</label>
                  </li>
                )}
              </div>
              <div className='btn_box'>
                <button className='submit_btn' type='submit'>완료</button>
                <Link to="/dsta"><button className='cancel_btn'>취소</button></Link>
              </div>
            </div>
          </div>
        </form>

        <div className='webname'>DAaaNG UNIV.</div>
      </div>
    </main>
  );
};