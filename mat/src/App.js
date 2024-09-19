import './App.css';
import Header from './components/common/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/main/main';
import Ex from './components/detail/searchFoodEx';
import ExDetail from './components/detail/storeDetailEx';
import Login from './components/login/login';
import Create from './components/login/createUser';
import AddReview from './review/review';
import { createTheme, ThemeProvider, Typography } from '@mui/material/styles';

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
  typography: {
    fontFamily: 'Poppins, sans-serif',  // 전역 폰트 패밀리 설정
    h1: {
      fontSize: '2.5rem',               // h1 태그의 폰트 크기 설정
      fontWeight: 600,                  // 폰트 두께 설정
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',                 // 본문 텍스트의 기본 크기 설정
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',            // 버튼 텍스트의 대문자 변환을 비활성화
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Header />
          <Routes>             
            <Route path='/' element={<Main />} />
            <Route path="/Map" element={<Ex />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/store/:storeId' element={<ExDetail />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/search' element={<Ex/>} />
            <Route path='/add' element={<AddReview />} />
          </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;
