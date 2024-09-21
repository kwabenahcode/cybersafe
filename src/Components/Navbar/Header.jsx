import React from 'react'
import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css'
import { LinkContainer } from 'react-router-bootstrap';
import Home from '../../Pages/Home/Home';


function Header() {
  return (
    <Navbar expand="lg" className="m-3">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='logo-text m-2'>CyberSafe</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/'>
              <Nav.Link className='nav_text m-2'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/courses'>
              <Nav.Link className='nav_text m-2'>Courses</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/resources'>
              <Nav.Link className='nav_text m-2'>Resources</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tips">
              <Nav.Link className='nav_text m-2' >Tips</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to='/login'>
              <Nav.Link className='login_btn' href="#login" xs="auto" >Log in</Nav.Link>
            </LinkContainer>
            <Col xs="auto">
              <Button type="submit" className='sign_up_btn'>Sign up</Button>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header