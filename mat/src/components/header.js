import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import SearchBar from './Searchbar';


function Header() { 
    return (
        <>
        <SearchBar />
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="">맛탐정</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">카테고리 검색</Nav.Link>
                <Nav.Link href="#home">카테고리 검색</Nav.Link>
                <Nav.Link href="#link">공지사항</Nav.Link>
                <NavDropdown title="더보기" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">최근에 간 맛집</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    가장 가까운 맛집
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">랜덤 추천</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    배고프다
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
}

export default Header;