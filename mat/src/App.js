import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/mainpage/main';
import Map from './components/map/map';
import { Navbar } from 'react-bootstrap';
import BagicProfile from './components/Mypage/MypageMain';

function App() {
  return (
    <Router>
      <> 
          <div className='nav'>
          <Header />
          </div>

          <button><a href='/Mypage/MypageMain'>임시</a></button>
          

      




        {/* 라우팅 설정 */}
        <div className='map'>
          <Routes>
            <Route path="/" element={ <Main/>} />
            <Route path="/Map" element={ <Map/>} />
            <Route path="/Mypage/MypageMain" element={ <BagicProfile/>} />
          </Routes>
        </div>
      </>    
    </Router>
  );
}

export default App;