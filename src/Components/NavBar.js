import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

const NavBar = ({ onSignIn, onSignOut, isSignedIn }) => {
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="/">
          <img className='nav-img' src='/BDA_Mono_White_Logo_Transparent.png' alt='British Dyslexia Association Logo' />
        </Navbar.Brand>
        <Navbar.Toggle className='navbar-dark' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav float-end">
          <Nav className="text-center ms-lg-5">
            <Nav.Link className='nav-link text-white' href="/">Home</Nav.Link>
            <Nav.Link className='nav-link text-white' href="dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="/resources" className='text-center'>Google Classroom</NavDropdown.Item>
              <NavDropdown.Item href="/resources" className='text-center'>BDA Website</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/resources" className='text-center'>Tech Support</NavDropdown.Item>
            </NavDropdown>
            {isSignedIn ? (
              <button type='button' className='btn-login py-2 px-lg-4' onClick={onSignOut}>Log Out</button>
            ) : (
              <button type='button' className='btn-login py-2 px-lg-4' onClick={onSignIn}>Log In</button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
