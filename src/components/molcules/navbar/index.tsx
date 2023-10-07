import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img src="/images/tangent.png" alt="Tangent Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
