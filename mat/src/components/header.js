import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import SearchBar from './Searchbar';
import './css/header.css';



function Header() { 
  return (
    <nav className="navbar">
        <ul>
            <li><a href="/"><h4>메인 홈페이지</h4></a></li>
            <li><a href="/Map">지도</a></li>
            <li><a href="#Dessert">Dessert</a></li>
            <li><a href="#Cart">Cart</a></li>
        </ul>
    </nav>
);
}

export default Header;