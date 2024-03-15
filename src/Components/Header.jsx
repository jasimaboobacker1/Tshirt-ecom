import React from 'react'
import "./Header.css";
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';




function Header() {
   
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='p-2'>
        <h3>TeeRex</h3>
        <Link to={'/'}><Button className='btn btn-dark'>HOME</Button></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={'cart'}><Button className='btn btn-dark'>Cart</Button></Link>
          <Link to={'wishlist'}><Button className='btn btn-dark'>Wishlist</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header