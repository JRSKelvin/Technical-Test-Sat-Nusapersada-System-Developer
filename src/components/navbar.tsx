import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">System Developer Profile PT Sat Nusapersada</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default NavbarComponent
