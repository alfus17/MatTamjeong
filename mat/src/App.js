import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/mainpage/main';
import Map from './components/map/map';
// import MypageMain from './components/mypage/mypageMain';
// import WritedText from './components/mypage/writedText';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // 아래 useEffect 서버와 연동 테스트 코드입니다.
  const [hello, setHello] = useState('');
  const [menuList, setMenuList] = useState([]);
  useEffect(()=> {
    axios.get('/api/test')
         .then(result => {
          console.log(result);
          console.log(result.data);
          setHello(result.data);
         })
  },[]);
// 여기까지 서버와 연동 테스트 코드 

  return (
    <Router>
      <> 
          <div className='nav'>
          <Header />
          </div>

        {/* 라우팅 설정 */}
        <div className='map'>
          <Routes>
            <Route path="/" element={ <Main/>} />
            <Route path="/Map" element={ <Map/>} />
            {/* <Route path="/mypageMain" element={ <MypageMain/>} > */}
            {/* <Route path='/mypageMain/writedText' element={<WritedText />} /> */}
            {/* </Route> */}
          </Routes>
        </div>
      </>    
    </Router>
  );
}

export default App;