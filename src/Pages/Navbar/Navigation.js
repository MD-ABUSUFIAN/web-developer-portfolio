import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>


<Navbar bg="black" expand="lg" variant="dark" className="p-3">
  <Container fluid>
  <Navbar.Brand href="https://drive.google.com/file/d/1h5pfiszot8kqRDBPYqIVOc6G_9Ec4Yr5/view?usp=sharing" target="_blank">Download Resume</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Project</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
        
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;