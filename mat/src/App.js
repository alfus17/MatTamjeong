import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Map from './components/map/map';
import Title from './components/title/title';
import Foot from './components/common/footer';
import Main from './components/main/main';
import StoreDetails from './components/detail/storeDetail';
import Sidebar from './components/common/sidebar';
import MypageMain from './components/Mypage/MypageMain';
import EditMe from './components/Mypage/editMe';
import ManagementHistory from './components/Mypage/managementHistory';
import AboutMe from './components/Mypage/aboutMe';
import {useEffect, useState} from "react";
import React from "react";




function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/MyPage")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
            setData(result);
      })
  },[]);

  return (
    <>
    <Router>
    <div className='backbg'>
      <div className='All'>  {/* 전체 영역 설정 */}
        <Header />
      <div className='content'>
        <div className='slideshow'>
 
        <Sidebar />

          <Routes>             
            <Route path='/' element={<Main />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Title" element={<Title />} />
            <Route path='/store/:storeId' element={<StoreDetails />} />

          {/* 사이드바 부분 */}
            <Route path="/mypageMain" element={ <MypageMain/>} >
              <Route path='/mypageMain/aboutMe' element={<AboutMe />} />
              <Route path='/mypageMain/editMe' element={<EditMe />} />
              <Route path='/mypageMain/managementHistory' element={<ManagementHistory />} />
            </Route>
          </Routes>

        </div>
          <Foot />
        </div>
      </div>
    </div>
    </Router>
  </>
  );
}

export default App;
