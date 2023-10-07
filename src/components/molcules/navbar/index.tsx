import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Navbar.Brand>
        <Link href={"/"}>
          <div>
            <img
              src="/images/tangent.png"
              alt="Tangent Logo"
              className={styles.navLogo}
            />
            <span className="mx-2">Ecommerce</span>
          </div>
        </Link>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse
        id="basic-navbar-nav"
        className={styles.collapseableNavbar}
      >
        <Nav className="mr-auto">
          <Nav.Link>
            <Link href={"/shop"}>Shop</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
