import React from 'react';

export default function MainPage() {
  return (
  
    <main id="main">
      <div classname='main_sub_body'>
        <div className='main_body'>
          <div class="swiper_body">
            <button class="banner_swiper_button_next"></button>
            <button class="banner_swiper_button_next"></button>

            <div className='swiper swiper-initialized swiper-pointer-events swiperbackface-hidden'></div>
          <div className='swiper-wrapper'></div>
          </div>
        
       
      
        <div class="main_bg_title_container">
        <div class="main_bg_title_box">
          <p class="list_title">BEST DAaang STAR</p>
        </div>
        <div class="main_select_box">
          <div class="select_box_container">
            <p class="ctr_button" id="ctr_button_p">일간
            </p>
            <div className='select_list_div_box'>
              <div>
                <p value="1">일간</p>
              </div>
              <div>
                <p value="2">주간</p>
              </div>
              <div>
                <p value="3">월간</p>
            </div>
            </div>
          </div>
          </div>
        </div>
          
      <div className="masonrt_div_box" >
        <div className="inner_box">
          <div className="inner_1>
        
            <div className="board_div_container01">
              <div className="board_div_box">
                <img src="" className="board_box_img" data-grid-lazy="true">
                <div className="main_img_user_info">
                <img src=""></img>
                  <p>김정만</p>
                </div>
              </div>
            
            
              <div className="board_div_box02">
                <p className="board_title">오늘은 나의 birthday  🎂 </p>
              </div>
              <div className="cnt_div_box">
                <p className="view_cnt_box">
                  <span>451</span></p>
                <p className="like_cnt_box">8</p>
                <p className="comment_cnt_box">5</p>
              </div>
            </div> 
              
              </div>
     

          </div>
        </div>
      
      
    </main >
    
  )
  
  
}