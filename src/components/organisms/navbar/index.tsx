"use client";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";
import Link from "next/link";
import SearchComponent from "@/components/molcules/search";
import UseCart from "@/hooks/useCart";
import { useSelector } from "react-redux";
const NavbarComponent = () => {
  UseCart();
  // @ts-ignore
  const { cart } = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className={`container ${styles.container}`}>
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

        <SearchComponent className={styles.searchContainer} />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.collapseableNavbar}
        >
          <Nav className="mr-auto">
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/cart"} className={styles.cartLengthContainer}>
              cart
              {Boolean(cart.length) && (
                <span className={styles.cartCount}>{cart.length}</span>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
