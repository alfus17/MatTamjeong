import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Searchbar';
import '../css/header.css';



function Header() { 
    // 버튼 클릭 시 /Mypage로 이동하는 함수
  const handleButtonClick = () => {
    window.location.href = "./mypageMain";
  };

    // 검색어 상태 관리
    const [search, setSearch] = useState("");

     // 검색어 변경 핸들러
    const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
    <SearchBar search={search} onChange={handleSearchChange} />
    <nav className="navbar">
        <ul>
            <li><a href="/"><h4>메인 홈페이지</h4></a></li>
            <li><a href="/Map">지도</a></li>
            <li><a href="#Dessert">Dessert</a></li>
            <li><a href="#Cart">Cart</a></li>
        </ul>
        <button onClick={handleButtonClick}>임시마페</button>
    </nav>
    </>
);
}

export default Header;