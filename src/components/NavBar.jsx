import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import logo from '../assets/logo.jpg'; // Importa la imagen del logo
import CartWidget from './CartWidget'; // Importa CartWidget desde la ruta correcta

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-custom-full-width">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img 
            src={logo}
            width="80"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contactos">Contactos</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <div className="ml-auto d-flex align-items-center">
            <CartWidget />
          </div>
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
