import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import SearchBar from './Searchbar';
import './header.css';



function Header() { 
  return (
    <nav className="navbar">
        <ul>
            <li><a href="/ss"><h4>DESSERT SHOP 🍰</h4></a></li>
            <li><a href="/Map">맛집 지도</a></li>
            <li><a href="#Dessert">Dessert</a></li>
            <li><a href="#Cart">Cart</a></li>
        </ul>
    </nav>
);
}

export default Header;