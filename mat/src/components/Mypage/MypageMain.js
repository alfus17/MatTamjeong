import { Outlet } from 'react-router-dom';
import '../css/MypageMain.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MypageMain = () => {

  const [userInfo, setUserInfo] = useState({
    userAddress: '', // 기본값으로 빈 문자열
    // 필요한 다른 필드도 여기에 추가
  });

  const [profileImage, setProfileImage] = useState(''); // 프로필 이미지 URL 저장

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

   // 프로필 사진을 변경하는 함수
   const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
    // 파일을 백엔드로 업로드하는 코드도 추가 가능
  };
  
  return (
    <div className="mypage-container">
      <div className='ProfileRectangleee'>
        <div className='ProfileCircleee'>
          <img 
            src={profileImage || ''} 
            alt="Profile" 
            className='ProfilePictureee' 
          />
          <label className="ProfileChangeOverlay">
            사진변경
            <input 
              type="file" 
              className="ProfileImageInput" 
              accept="image/*"
              onChange={handleProfileImageChange} 
            />
          </label>
        </div>

        <div className='ProfileInfooo'>
          <div className='ProfileNameee'>{userInfo.nickName || '정보 없음'}</div>
          <div className='ProfileEmailll'>{userInfo.email || '정보 없음'}</div>
          
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
