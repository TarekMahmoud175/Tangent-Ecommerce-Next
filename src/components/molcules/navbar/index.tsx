"use client";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className="container">
        <Navbar.Brand>
          <Link href={"/"}>
            <div>
              <img
                src="/images/tangent.png"
                alt="Tangent Logo"
                className={styles.navLogo}
              />
              <span className="mx-2">Tangent</span>
            </div>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.collapseableNavbar}
        >
          <Nav className="mr-auto">
            <Link href={"/shop"}>Shop</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
