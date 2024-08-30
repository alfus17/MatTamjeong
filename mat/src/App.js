import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slide from './components/slide';


function App() {
  return (
    <>
    <Header />
    <div className='view'>
    <Slide /><Slide /><Slide />
    </div>
    </>
  );
}

export default App;
