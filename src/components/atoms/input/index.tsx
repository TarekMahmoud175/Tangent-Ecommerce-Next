import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: "text" | "password" | "email";
  className?: string;
  value?: string;
  setValue?: (e: string) => void;
  checked?: boolean;
}

const InputComponent = ({
  inputType = "text",
  className = "",
  setValue = (_e) => {},
  ...rest
}: InputProps) => {
  return (
    <input
      type={inputType}
      className={`${className} ${styles.input}`}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
};

export default InputComponent;
