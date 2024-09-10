import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Map from './components/map/map';
import Title from './components/title/title';
import Foot from './components/common/footer';
import Main from './components/main/main';
import StoreDetails from './components/detail/storeDetail';
import Ex from './components/detail/searchFoodEx';
import ExDetail from './components/detail/storeDetailEx';




// npm install @mui/material @emotion/react @emotion/styled
// npm i axios
// npm i react-router-dom
// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @mui/icons-material

// npm cache clean --force

function App() {

  return (
    <>
    <Router>
    <div className='backbg'>
      <div className='All'>  {/* 전체 영역 설정 */}
        <Header />
      <div className='content'>
        <div className='slideshow'>
          <Routes>             
            <Route path='/' element={<Main />} />
            <Route path="/Map" element={<Ex />} />
            <Route path="/Detail" element={<ExDetail/>} />
            <Route path="/Title" element={<Title />} />
            <Route path='/store/:storeId' element={<StoreDetails />} />
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
