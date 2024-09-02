import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/mainpage/main';
import Map from './components/map/map';
import Foot from './components/common/footer';

function App() {
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
          </Routes>
        </div>
        <Foot />
      </>    
    </Router>
  
  );
}

export default App;