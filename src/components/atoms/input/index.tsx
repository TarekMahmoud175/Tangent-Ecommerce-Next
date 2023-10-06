import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: "text" | "password" | "email";
  className?: string;
  value?: string;
  setValue?: () => void;
  checked?: boolean;
}

const InputComponent = ({
  inputType = "text",
  className = "",
  ...rest
}: InputProps) => {
  return (
    <input
      type={inputType}
      className={`${className} ${styles.input}`}
      {...rest}
    />
  );
};

export default InputComponent;
