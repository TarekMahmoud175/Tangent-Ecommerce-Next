"use client";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";
import Link from "next/link";
import SearchComponent from "@/components/molcules/search";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className="container">
        <Navbar.Brand>
          <Link href={"/"}>
            <div>
              <img
                src="/icons/logo.svg"
                alt="Tangent Logo"
                className={styles.navLogo}
              />
            </div>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <SearchComponent />

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
