import { Outlet } from 'react-router-dom';
import '../css/MypageMain.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MypageMain = () => {

  const [userInfo, setUserInfo] = useState({
    userAddress: '', // 기본값으로 빈 문자열
    // 필요한 다른 필드도 여기에 추가
  });

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      // 백엔드 API에서 사용자 정보 가져오기
      const response = await axios.get(`/getuserInfo/${2}`); // ID를 적절히 변경
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져옴
  useEffect(() => {
    fetchUserInfo();
  }, []);
  
  return (
    <div className="mypage-container">
      <div className='ProfileRectangleee'>
        <div className='ProfileCircleee'>
          <img src={''} alt="Profile" className='ProfilePictureee' />
        </div>

        <div className='ProfileInfooo'>
          <div className='ProfileNameee'>{userInfo.userId || '정보 없음'}</div>
          <div className='ProfileEmailll'>이메일</div>
          
          <button className='ProfileEditButtonnn'><a href='/mypageMain/aboutMe'>내프로필</a></button>
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
