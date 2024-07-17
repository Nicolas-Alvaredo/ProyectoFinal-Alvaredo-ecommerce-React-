import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src={logo}
            width="80"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav-center">
            <NavLink to="/category/crash" className={({ isActive }) => isActive ? 'active-option' : 'option'}>Crashes</NavLink>
            <NavLink to="/category/hi-hat" className={({ isActive }) => isActive ? 'active-option' : 'option'}>Hi-Hats</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-option' : 'option'}>Contacto</NavLink>
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
