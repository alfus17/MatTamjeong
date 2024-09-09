import { useNavigate } from 'react-router-dom';
import '../css/topsearch.css';
import React, { useState } from 'react';

function Topsearch () {
  const [searchFood, setSearchFood] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate;

     return (

      <div className='search'>
        <input className='searchba' type="text" />
        <img  className='searchicon'  src='/img/pngegg.png' />  
      </div>
     )
}

export default Topsearch;