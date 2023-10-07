import React from "react";
import ButtonComponent from "@/components/atoms/button";
import styles from "./page.module.scss";
import InputComponent from "@/components/atoms/input";
import NavbarComponent from "@/components/molcules/navbar";

export default function Home() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ButtonComponent children={"hiiiiii"} />
          </div>
          <div className="col-6">
            <InputComponent />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
