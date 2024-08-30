import './App.css';
import SearchBar from './components/Searchbar';
import Header from './components/header';
import Location from './components/location';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <> 
        <SearchBar/>
        <div className='nav'>
          <Header />
        </div>

        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/Map" element={<Location />} />  {/* /Map 경로로 Location 컴포넌트 렌더링 */}
        </Routes>
      </>
    </Router>
  );
}

export default App;