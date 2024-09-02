import React from 'react';
import '../css/MypageMain.css';

const MypageMain = () => {
  return (
    <div className='ProfileRectangleee'>
      <div className='ProfileCircleee'>
        <img src={''} alt="Profile" className='ProfilePictureee' />
      </div>

      <div className='ProfileInfooo'>
        <div className='ProfileNameee'>이름</div>
        <div className='ProfileEmailll'>이메일</div>
        <div className='ProfileButtonnn'>
          <button>내프로필</button>
          <button>정보수정</button>
          <button>이력관리</button>
        </div>
      </div>
    </div>
  );
};

export default MypageMain;
