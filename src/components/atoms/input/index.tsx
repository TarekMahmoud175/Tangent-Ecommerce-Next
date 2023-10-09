import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: "text" | "password" | "email";
  className?: string;
  value?: string;
  setValue?: (e: string) => void;
  checked?: boolean;
  Inputref?: React.RefObject<HTMLInputElement>;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputComponent = ({
  inputType = "text",
  className = "",
  setValue = (_e) => {},
  Inputref,
  handleFocus,
  handleBlur,
  ...rest
}: InputProps) => {
  return (
    <input
      type={inputType}
      className={`${className} ${styles.input}`}
      onChange={(e) => setValue(e.target.value)}
      ref={Inputref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
};

export default InputComponent;
