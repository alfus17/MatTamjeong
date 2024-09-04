import './components/css/App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/mainpage/main';
import Map from './components/map/map';
import MypageMain from './components/mypage/mypageMain';
import WritedText from './components/mypage/writedText';
import EditMe from './components/mypage/editMe';
import ManagementHistory from './components/mypage/managementHistory';
import Title from './components/title/title';
import Foot from './components/common/footer';


function App() {

//   // 아래 useEffect 서버와 연동 테스트 코드입니다.
//   const [hello, setHello] = useState('');
//   const [menuList, setMenuList] = useState([]);
//   useEffect(()=> {
//     axios.get('/api/stores')
//          .then(result => {
//           console.log(result);
//           console.log(result.data);
//           setHello(result.data);
//          })
//   },[]);
// // 여기까지 서버와 연동 테스트 코드 

  return (
    <Router>
      <> 
     
<div className='All'>  {/* 전체 영역 설정  건들지 마셈*/}
        <Header />

        <button><a href='/MypageMain'>임시마페</a></button>

        {/* 라우팅 설정 */}
        <div className='map'>
          <Routes>
            <Route path="/" element={ <Main/>} />
            <Route path="/Map" element={ <Map/>} />
            <Route path="/Title" element={ <Title/>} />
         
            <Route path="/mypageMain" element={ <MypageMain/>} />
            <Route path='/mypageMain/writedText' element={<WritedText />} />
            <Route path='/mypageMain/editMe' element={<EditMe />} />
            <Route path='/mypageMain/managementHistory' element={<ManagementHistory />} />

            {/* </Route> */}
          </Routes>
          <Foot />
        </div>
</div>
      </>    
    </Router>
  );
}

export default App;