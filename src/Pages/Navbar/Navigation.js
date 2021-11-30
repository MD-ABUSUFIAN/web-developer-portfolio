import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>


<Navbar bg="black" expand="lg" variant="dark" className="p-3">
  <Container fluid>
  <Navbar.Brand className="fs-2" >WELCOME MY PORTFOLIO </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0 fs-4"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/home#project">Project</Nav.Link>
      <Nav.Link href="/home#contact">Contact</Nav.Link>
      <Nav.Link href="/home#about">About Me</Nav.Link>
      <Nav.Link><Link to='/blogs' className='text-decoration-none text-light'>Blogs</Link></Nav.Link>
        
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;