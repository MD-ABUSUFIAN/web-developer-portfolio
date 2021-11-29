import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>


<Navbar bg="black" expand="lg" variant="dark" className="p-3">
  <Container fluid>
  <Navbar.Brand className="fs-1" >WELCOME MY PORTFOLIO </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0 fs-4"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#project">Project</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#about">About Me</Nav.Link>
        
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;