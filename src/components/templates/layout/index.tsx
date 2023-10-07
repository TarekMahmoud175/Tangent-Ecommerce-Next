import React, { ReactNode } from "react";
import NavbarComponent from "@/components/molcules/navbar";
import styles from "./layout.module.scss";
type LayoutProps = {
  children?: ReactNode;
  page?: string;
};

const Layout = ({ children, page }: LayoutProps) => {
  return (
    <div className={page} data-page-name={page} id="MainContent">
      <NavbarComponent />
      <main className={`container ${styles.mainContent}`}>{children}</main>
    </div>
  );
};

export default Layout;
