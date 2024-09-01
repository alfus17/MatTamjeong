import './components/css/App.css';
import SearchBar from './components/Searchbar';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Map from './components/map';

function App() {
  return (
    <Router>
      <> 
        <SearchBar/>
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
      </>    
    </Router>
  );
}

export default App;