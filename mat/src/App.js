import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './components/map/map';
import Title from './components/title/title';
import Foot from './components/common/footer';
import Main from './components/main/main';
import StoreDetails from './components/detail/storeDetail';
import Ex from './components/detail/searchFoodEx';
import ExDetail from './components/detail/storeDetailEx';
import MypageMain from './components/Mypage/MypageMain';
import AboutMe from './components/Mypage/aboutMe';
import EditMe from './components/Mypage/editMe';
import ManagementHistory from './components/Mypage/managementHistory';

function App() {
  return (
    <Router>
      <div className='backbg'>
        <div className='All'>
          <Header />
          <div className='content'>
            <div className='slideshow'>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path="/Map" element={<Ex />} />
                <Route path="/Detail" element={<ExDetail />} />
                <Route path="/Title" element={<Title />} />
                <Route path='/store/:storeId' element={<StoreDetails />} />
                <Route path="/MypageMain" element={<MypageMain />}>
                  <Route path="aboutMe" element={<AboutMe />} />
                  <Route path="editMe" element={<EditMe />} />
                  <Route path="managementHistory" element={<ManagementHistory />} />
                </Route>
              </Routes>
            </div>
            <Foot />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
