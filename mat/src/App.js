import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Map from './components/map/map';
import Title from './components/title/title';
import Foot from './components/common/footer';
import Main from './components/main/main';
import Main2 from './components/main/main2';


function App() {

  return (
    <>
    <Router>
    <div className='backbg'>
      <div className='All'>  {/* 전체 영역 설정 */}
        <Header />
      <div className='content'>
        <Main2 />
        <Main />
        <div className='slideshow'>
          <Routes>             
            <Route path="/Map" element={<Map />} />
            <Route path="/Title" element={<Title />} />
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
