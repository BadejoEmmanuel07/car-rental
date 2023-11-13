import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Logo } from '../images/index';
import { Outlet } from 'react-router-dom';

function Navlinks() {
  return (
    <div className='navt'>
      <Navbar expand="md" className="custom-box navbar-static-top" id="responsive-navbar-nav">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <div className="flex-1">
            <Navbar.Brand href="/"> <img src={Logo} alt="" style={{ width: "150px" }} /></Navbar.Brand>
          </div>
          <div className="flex-2 nav-t">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse  >
              <Nav className="ms-auto navtt">
                <Nav.Link href="/" className="navt">Home</Nav.Link>
                <Nav.Link href="/about" className="navt">About</Nav.Link>
                <Nav.Link href="/testimonial" className="navt">Testimonials</Nav.Link>
                <Nav.Link href="/model" className="navt">Model</Nav.Link>
                <Nav.Link href="/team" className="navt">Our Team</Nav.Link>
                <Nav.Link href="/contact" className="navt">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="flex-3 d-flex align-items-center justify-content-end text-content head">
            <p className="m-0 d-none d-md-block">Sign in</p>
            <button className="btm ms-2 d-none d-md-block">Register</button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navlinks;
