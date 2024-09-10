import React, { useState } from 'react';
import '../css/sidebar.css';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  return (
    <>
      {/* Sidebar Toggle Button, hidden when sidebar is visible */}
      <div className={`button-container ${sidebarVisible ? 'hidden' : ''}`}>
        <img src='/img/mat.png' onClick={toggleSidebar} /> 
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
        <button className='close-sidebar' onClick={toggleSidebar}>사이드바 힘차게 닫기버튼</button>
        
        <hr id='sidebarfirstbtn'/>
        
        <button className="sidebarbtn">
          <a href='/MypageMain/aboutMe'>누가바</a>
        </button>
        
        <hr />
        
        <button className="sidebarbtn">
          <a href='/MypageMain/aboutMe'>바밤바</a>
        </button>
        
        <hr />
        
        <button className="sidebarbtn">
          <a href='/MypageMain/aboutMe'>사이드바</a>
        </button>
        
        <hr />
        
        <button className="sidebarbtn">
          <a href='/MypageMain/aboutMe'>레쓰고우~</a>
        </button>
        
        <hr />

        <button className="sidebarbtn">
          <a href='/MypageMain/aboutMe'>마이 페이지</a>
        </button>

        <hr />
      </div>
    </>
  );
};

export default Sidebar;
