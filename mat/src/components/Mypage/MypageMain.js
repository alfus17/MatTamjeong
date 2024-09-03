import React from 'react';
import { Outlet } from 'react-router-dom';
import '../css/mypageMain.css';

const MypageMain = () => {
  return (
    <div className="mypage-container">
      <div className='ProfileRectangleee'>
        <div className='ProfileCircleee'>
          <img src={''} alt="Profile" className='ProfilePictureee' />
        </div>

        <div className='ProfileInfooo'>
          <div className='ProfileNameee'>이름</div>
          <div className='ProfileEmailll'>이메일</div>
          
          <button className='ProfileEditButtonnn'><a href='/mypageMain/writedText'>내프로필</a></button>
          <button className='ProfileEditButtonnn'><a href='/mypageMain/editMe'>정보수정</a></button>
          <button className='ProfileEditButtonnn'><a href='/mypageMain/ManagementHistory'>이력관리</a></button>
        </div>
      </div>

      <div className="mypage-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MypageMain;
