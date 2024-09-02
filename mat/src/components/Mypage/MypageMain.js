import React from 'react';
import './BagicProfile.css';
import profileImage from '../img/SampleMonkey.png'; // 로컬 이미지 경로

const BagicProfile = () => {
  return (
    <div style={{ width: '250px', height: '400px', border: '1px solid black', padding: '20px',  borderRadius: '30px'}} className='Profileee'>
      <div style={{ border: '1px solid black', borderRadius: '50%', width: '150px', height: '150px', margin: 'auto', overflow: 'hidden' }}> 
        <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{marginTop: '40px'}}>이름</div>
        <div style={{marginTop: '20px'}}>이메일</div>
      </div>
    </div>
  );
};

export default BagicProfile;