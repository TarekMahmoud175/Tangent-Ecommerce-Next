import React from "react";
import ButtonComponent from "@/components/atoms/button";
import styles from "./page.module.scss";
import InputComponent from "@/components/atoms/input";

export default function Home() {
  return (
    <React.Fragment>
      <ButtonComponent children={"hiiiiii"} />
      <InputComponent />
    </React.Fragment>
  );
}
