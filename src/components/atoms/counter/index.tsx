"use client";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ButtonComponent from "@/components/atoms/button";
import styles from "./counter.module.scss";

type CounterProps = {
  handleIncrease?: (e: number) => void;
  handleDecrease?: (e: number) => void;
  counterStart: number;
  className?: string;
  onZeroReach?: () => void;
};

const Counter = ({
  handleDecrease = () => {},
  handleIncrease = () => {},
  counterStart = 1,
  className = "",
  onZeroReach = () => {},
}: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(counterStart);
  }, []);

  const increment = () => {
    setCount((prev) => {
      let newCount = prev + 1;
      handleIncrease(count + 1);
      return newCount;
    });
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => {
        let newCount = prev - 1;
        handleDecrease(newCount);
        return newCount;
      });
    } else if (count == 1) {
      onZeroReach();
    }
  };

  return (
    <div className={`${styles.counterContainer} ${className}`}>
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
