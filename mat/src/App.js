import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Map from './components/map/map';
import Title from './components/title/title';
import Foot from './components/common/footer';
import Main from './components/main/main';
import Gang from './components/main/gang';
import MapImg from './components/map_img/img_map';

function App() {

  return (
    <Router>
      <div className='All'>  {/* 전체 영역 설정 */}
        <Header />
        <Main />
        <div className='map'>
          <Routes>             
            <Route path='/gang' element={<Gang />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Title" element={<Title />} />
          </Routes>
          <Foot />
        </div>
      </div>
    </Router>
  );
}

export default App;
