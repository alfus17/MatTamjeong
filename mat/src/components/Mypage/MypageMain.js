import { Outlet } from 'react-router-dom';
import '../css/MypageMain.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MypageMain = () => {

  const [userInfo, setUserInfo] = useState({
    userAddress: '',
  });

  const [profileImage, setProfileImage] = useState('');

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`/getuserInfo/${2}`);
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
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
          <button className='ProfileEditButtonnn'>
            <a href='/mypageMain/passwordConfirm'>정보수정</a> {/* Change link to PasswordConfirm */}
          </button>
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
