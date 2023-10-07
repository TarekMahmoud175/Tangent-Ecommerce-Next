import React, { ReactNode } from "react";
import NavbarComponent from "@/components/molcules/navbar";

type LayoutProps = {
  children?: ReactNode;
  page?: string;
};

const Layout = ({ children, page }: LayoutProps) => {
  return (
    <div className={page} data-page-name={page} id="MainContent">
      <NavbarComponent />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
