import React, { useState } from 'react';

function getCategoryImage(category) {
  switch (category) {
    case '먹어요':
      return '../img/dmunity/eat.png';
    case '아파요':
      return '../img/dmunity/sick.png';
    case '놀아요':
      return '../img/dmunity/play.png';
    case '어때요':
      return '../img/dmunity/how.png';
    default:
      return '../img/dmunity/notification.png';
  }
}
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
        <img className="category" src={categoryImage} alt={category} />
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
          <a href='#!'>커뮤니티</a>
        </div>
        <div className='row2'>
          <span><button type='buuton'><img src="./img/dmunity/eat.png" alt="" /></button><a href='#!'>먹어요</a></span>
          <span><button type='buuton'><img src="./img/dmunity/sick.png" alt="" /></button><a href='#!'>아파요</a></span>
          <span><button type='buuton'><img src="./img/dmunity/play.png" alt="" /></button><a href='#!'>놀아요</a></span>
          <span><button type='buuton'><img src="./img/dmunity/how.png" alt="" /></button><a href='#!'>어때요</a></span>
          <span><button type='buuton'><img src="./img/dmunity/etc.png" alt="" /></button><a href='#!'>기타</a></span>
        </div>
      </div>
      <div id='postsboard'>
        <h2>posts</h2>
        {posts.map(post => (
          <Post
            category={post.dmunity_category}
            title={post.dmunity_title}
            contents={post.dmunity_text}
            date={post.dmunity_date}
            view={post.dmunity_hit}
            likes={post.dmunity_like}
            userid={post.userid}
          />
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
}

export default DmunityMainPage;
