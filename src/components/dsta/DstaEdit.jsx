import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DstaEdit() {

  //폼 제출 후 페이지 이동
  const navigate = useNavigate();

  //쿼리스티링에서 dstarNo 값 가져오기
  const location = useLocation();
  const dstarNo = new URLSearchParams(location.search).get('dstarNo');


  //데이터받아오기
  useEffect(() => {
    axios({
      url: `/dsta/getDstaByDstarNo/${dstarNo}`,
      method: 'GET'
    })
      .then((res) => {
        const data = res.data;
        setThumbnailFile({
          file: data.dstarThumbnail,
          fileUrl: null
        });
        setTextData(data.dstarText);
        setHashTag(data.dstarTag);
        const img1 = data.dstarImg1;
        const img2 = data.dstarImg2;
        const img3 = data.dstarImg3;
        const img4 = data.dstarImg4;
        // data.dstarImg1부터 data.dstarImg4까지 모두 null 또는 빈 문자열인 경우 빈 배열로 설정
        const imagesArray = [img1, img2, img3, img4].filter(img => img !== null && img !== '');
        setAddFiles(imagesArray);
      })
      .catch((err) => {
        console.log(`AXIOS 실패! ${err}`);
      });
  }, [dstarNo]);


  //썸네일 업로드, 이미지 미리보기 기능
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const upload = useRef();
  const imgUpload = () => {
    if (upload.current && upload.current.files.length > 0) {
      const file = upload.current.files[0];
      const fileUrl = URL.createObjectURL(file);
      setThumbnailFile({
        file,
        fileUrl
      });
    }
  };

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
  const removeImage = (index, e) => {
    e.preventDefault();
    e.stopPropagation(); // 이벤트 전파 중지
    const updatedFiles = [...addFiles];
    updatedFiles.splice(index, 1);
    setAddFiles(updatedFiles);
    console.log(addFiles);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();

    // 썸네일 파일이 변경되면 추가
    if (thumbnailFile && thumbnailFile.file) {
      formData.append('thumbnailFile', thumbnailFile.file);
    }

    // 기존 JSON 데이터 추가
    formData.append('dstarNo', dstarNo);
    formData.append('userid', 'admin');
    formData.append('dstarText', textData);
    formData.append('dstarTag', hashTag);

    // 추가된 파일이 있다면 FormData에 추가
    for (let index = 0; index < addFiles.length; index++) {
      formData.append(`dstarImg${index + 1}`, addFiles[index]);
    }

    // Axios를 사용하여 PUT 요청
    try {
      const response = await axios.put('/dsta/dstarEdit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 변경된 Content-Type
        },
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
          <img src='./img/Autograph.png' alt='수정아이콘' />
          댕스타 수정하기
        </h2>
        <div className='spring_img'></div>
        <form className='innerbox' onSubmit={handleSubmit}>
          <div className='leftbox'>
            <div className='thumbnail'>
              {thumbnailFile && (
                <>
                  <img className='thumbnail_img' src={!thumbnailFile.fileUrl ? (`http://localhost:8080/dsta/images/${thumbnailFile.file}`) : thumbnailFile.fileUrl} alt="Uploaded" />
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
              <textarea
                className='textcontent'
                placeholder='내용을 입력하세요.'
                value={textData}
                onChange={handleTextData}
              />
              <input
                className='tagcontent'
                type='text'
                placeholder='#해시태그입력'
                value={hashTag}
                onChange={handleHashTag}
              />
              <div className='addphoto_box'>
                {addFiles.map((file, index) => {
                  return (
                    <li className='add_photo' key={index}>
                      <img className='added_img' src={file} alt="Uploaded" />
                      <button className='img_delete_btn' onClick={(e) => removeImage(index, e)}>
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