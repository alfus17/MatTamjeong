import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NavermapsProvider } from 'react-naver-maps';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/common/pallet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavermapsProvider>
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>
  </NavermapsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
