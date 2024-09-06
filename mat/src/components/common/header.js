import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css';
import Navba from './nav';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import Topsearch from './topsearch';


>>>>>>> parent of 768dd76 (2024-09-06)

function Header() { 
    const navigate = useNavigate(); // useNavigate 훅 사용

    // 클릭 핸들러 함수
    const handleLogoClick = () => {
      navigate('/'); // 메인 페이지로 이동
    };

    return (
      <>
        <div className='top'>
          <div className='head'>
            {/* 로고 이미지를 추가하고 클릭 이벤트를 연결 */}
            <img 
              src='/img/mat.png' 
              className='logo'
              onClick={handleLogoClick} // 클릭 이벤트 추가
            />
<<<<<<< HEAD
          </div>
=======
        </div>  
        <div className='searchbox'>
        <Topsearch />
<<<<<<< HEAD
>>>>>>> parent of 768dd76 (2024-09-06)
=======
>>>>>>> parent of 768dd76 (2024-09-06)
        </div>
        <Navba />
      </>
    );
}

export default Header;
