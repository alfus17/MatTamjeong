import './components/css/App.css';
<<<<<<< Updated upstream
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/mainpage/main';
import Map from './components/map/map';
import MypageMain from './components/mypage/mypageMain';
import WritedText from './components/mypage/writedText';
=======
// import SearchBar from './components/Searchbar';
// import Header from './components/header';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Main from './components/main';
// import Map from './components/map';


import { useEffect, useState } from 'react';
import axios from 'axios';




>>>>>>> Stashed changes

function App() {
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
  return (
<<<<<<< Updated upstream
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
            <Route path="/mypageMain" element={ <MypageMain/>} >
            <Route path='/mypageMain/writedText' element={<WritedText />} />
            </Route>
          </Routes>
        </div>
      </>    
    </Router>
=======
   
    <h3>서버에서 들어온 값 : {hello}</h3>
    
    // <Router>
    //   <> 
    //     <SearchBar/>
    //       <div className='nav'>
    //       <Header />
    //       </div>


    //     {/* 라우팅 설정 */}
    //     <div className='map'>
    //       <Routes>
    //         <Route path="/" element={ <Main/>} />
    //         <Route path="/Map" element={ <Map/>} />
    //       </Routes>
    //     </div>
    //   </>    
    // </Router>
>>>>>>> Stashed changes
  );
}

export default App;