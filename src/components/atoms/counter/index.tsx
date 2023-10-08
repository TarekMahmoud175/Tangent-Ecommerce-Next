"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ButtonComponent from "@/components/atoms/button";
import styles from "./counter.module.scss";

type CounterProps = {
  handleIncrease?: (e: string) => void;
  handleDecrease?: (e: string) => void;
};

const Counter = ({ handleDecrease, handleIncrease }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <div className={styles.counterControls}>
        <ButtonComponent className={styles.counterButton} onClick={decrement}>
          <FaMinus />
        </ButtonComponent>
        <p className={styles.counterValue}>{count}</p>
        <ButtonComponent className={styles.counterButton} onClick={increment}>
          <FaPlus />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Counter;
