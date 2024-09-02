import logo from './logo.svg';

import { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
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
    <div className="App">
      <h3>서버에서 들어온 값 : {hello}</h3>
      <br />
      <hr />
      <br />

      {
        menuList.map((menu) => {
          return (
            <div>{menu.name}</div>
          )
        })
      }
      <button onClick={() => {
        axios.get('/api/menuall')
             .then(result => {
              console.log(result);
              setMenuList(result.data);
             })
             .catch(() => {
              console.log("실패");
             })
      }}>서버에서 메뉴가져오기</button>
      
     
    </div>
  );
}

export default Test;
