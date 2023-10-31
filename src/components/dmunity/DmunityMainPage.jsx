import React, { useState } from 'react';

const getCategoryImage = category => {
  switch (category) {
    case '먹어요':
      return '../img/eating.png';
    case '아파요':
      return '../img/hurts.png';
    case '놀아요':
      return '../img/hang.png';
    case '어때요':
      return '../img/how.png';
    default:
      return '../img/etc.png';
  }
};

const posts = [
  {
    dmunity_category: "기타",
    dmunity_title: "예시 데이터",
    dmunity_text: "예시 데이터",
    dmunity_date: "2023-10-27",
    dmunity_hit: 27,
    dmunity_like: 10,
    userid: "운영자"
  },
  {
    dmunity_category: "기타",
    dmunity_title: "예시 데이터",
    dmunity_text: "예시 데이터",
    dmunity_date: "2023-10-27",
    dmunity_hit: 27,
    dmunity_like: 10,
    userid: "운영자"
  },
  {
    dmunity_category: "기타",
    dmunity_title: "예시 데이터",
    dmunity_text: "예시 데이터",
    dmunity_date: "2023-10-27",
    dmunity_hit: 27,
    dmunity_like: 10,
    userid: "운영자"
  },
  {
    dmunity_category: "기타",
    dmunity_title: "예시 데이터",
    dmunity_text: "예시 데이터",
    dmunity_date: "2023-10-27",
    dmunity_hit: 27,
    dmunity_like: 10,
    userid: "운영자"
  },
  {
    dmunity_category: "기타",
    dmunity_title: "예시 데이터",
    dmunity_text: "예시 데이터",
    dmunity_date: "2023-10-27",
    dmunity_hit: 27,
    dmunity_like: 10,
    userid: "운영자"
  }

  //댕뮤니티DB
];

const Post = ({ category, title, contents, view, likes, date, userid }) => {
  const categoryImage = getCategoryImage(category);

  return (
    <div id="post">
      <div className='postLeft'>
        <div className="category" src={categoryImage} alt={category}></div>
      </div>
      <div className='postMiddle'>
        <div className="title">{title}</div>
        <div className="contents">{contents}</div>
        <div className="info">
          <span className="view">{view} views</span>
          <span className="likes">{likes} likes</span>
        </div>
      </div>
      <div className='postRight'>
        <div className="date">{date}</div>
        <div className='userid'>{userid}</div>
      </div>
    </div>
  );
};

function DmunityMainPage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <div id="dmunity">
      <div className='categoryContainer'>
        <div className='row1'>
          <a>커뮤니티</a>
        </div>
        <div className='row2'>
          <span><button></button><a>먹어요</a></span>
          <span><button></button><a>아파요</a></span>
          <span><button></button><a>놀아요</a></span>
          <span><button></button><a>어때요</a></span>
          <span><button></button><a>기타</a></span>
        </div>
      </div>
      <div id='postsboard'>
        <a>posts</a>
        {posts.map(post => (
          <Post category={post.dmunity_category} title={post.dmunity_title} contents={post.dmunity_text} date={post.dmunity_date} view={post.dmunity_hit} likes={post.dmunity_like} userid={post.userid} />
        ))}
        <div className='pageLink'></div>
        <div className='searchBox'>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="검색"
          />
          <span>검색</span>
        </div>
      </div>
    </div>
  );
};
export default DmunityMainPage() 