import React from 'react'
import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css'


function Header() {
  return (
    <Navbar expand="lg" className="m-3">
      <Container>
        <Navbar.Brand className='logo-text m-2' href="#home" >CyberSafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav_text m-2' href="#home">Home</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown" className='m-2'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item >
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="basic-nav-dropdown" className='m-2'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav_text m-2' href="#link" >Link</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='login_btn' href="#login" xs="auto" >Log in</Nav.Link>
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