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
        <button className='close-sidebar' onClick={toggleSidebar}>���̵�� ������ �ݱ��ư</button>
        
        <hr id='sidebarfirstbtn'/>
        
        <button className="sidebarbtn">
          <a href='/MypageMain/writedText'>������</a>
        </button>
        
        <hr />
        
        <button className="sidebarbtn">
          <a href='/MypageMain/writedText'>�ٹ��</a>
        </button>
        
        <hr />
        
        <button className="sidebarbtn">
          <a href='/MypageMain/writedText'>���̵��</a>
        </button>
        
        <hr />
        
        <button className="sidebarbtn">
          <a href='/MypageMain/writedText'>�������~</a>
        </button>
        
        <hr />

        <button className="sidebarbtn">
          <a href='/MypageMain/writedText'>���� ������</a>
        </button>

        <hr />
      </div>
    </>
  );
};

export default Sidebar;
