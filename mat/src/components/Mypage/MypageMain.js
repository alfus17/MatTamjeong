import React from 'react';
import '../css/mypageMain.css';

const MypageMain = () => {
  return (
    <div className='ProfileRectangleee'>
      <div className='ProfileCircleee'>
        <img src={''} alt="Profile" className='ProfilePictureee' />
      </div>

      <div className='ProfileInfooo'>
        <div className='ProfileNameee'>이름</div>
        <div className='ProfileEmailll'>이메일</div>
        
          <button className='ProfileEditButtonnn'>내프로필</button>
          <button className='ProfileEditButtonnn'>정보수정</button>
          <button className='ProfileEditButtonnn'>이력관리</button>
      </div>

      {/* 여기까지가 왼쪽에 뜨는 기본 프로필 */}

    </div>
  );
};

export default MypageMain;
