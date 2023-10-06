import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonComponent = ({
  onClick,
  className="",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
