
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/main/main';
import Ex from './components/detail/searchFoodEx';
import ExDetail from './components/detail/storeDetailEx';
import MypageMain from './components/Mypage/MypageMain';
import AboutMe from './components/Mypage/aboutMe';
import PasswordConfirm from './components/Mypage/passwordConfirm'; 
import EditMe from './components/Mypage/editMe';
import ManagementHistory from './components/Mypage/managementHistory';
import Login from './components/login/login';
import Create from './components/login/createUser';
import AddReview from './components/review/review';
import { createTheme, ThemeProvider, Typography } from '@mui/material/styles';
import Find from './components/login/findUser';
import { AuthProvider, IsLoginProvider } from './components/login/authContext';
import { Foot } from './components/common/foot';

// npm install @mui/material @emotion/react @emotion/styled
// npm i axios
// npm i react-router-dom
// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @mui/icons-material
// npm install @mui/x-date-pickers
// npm install date-fns@latest
// npm install date-fns@2.28.0

// npm cache clean --force


const theme = createTheme({
  palette: {
      primary: {
          main: '#FF7D29',
      },
  },
  typography: {
      fontFamily: 'Orbit', // Global font family
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <>
    {/* 로그인 상태 유지를 위해  씌워준 컴포넌트 */}
    <IsLoginProvider>
      <Router>
            <Header />
                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path="/Map" element={<Ex />} />
                  <Route path="/Detail" element={<ExDetail />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path='/store/:storeId' element={<ExDetail />} />
                  <Route path='/enroll' element={<Create />} />
                  <Route path='/find' element={<Find />} />
                  <Route path='/search/:category/:keyword/:startpage' element={<Ex/>} />
                  <Route path='/add' element={<AddReview />} />                  
                  <Route path="/MypageMain" element={<MypageMain />}>
                    <Route path="aboutMe" element={<AboutMe />} />
                    <Route path="editMe" element={<EditMe />} />
                    <Route path="managementHistory" element={<ManagementHistory />} />
                    <Route path="passwordConfirm" element={<PasswordConfirm />} />
                  </Route>
                </Routes>
      </Router>
      <Foot />
      </IsLoginProvider>
    </>
    </ThemeProvider>
  );
}

export default App;
