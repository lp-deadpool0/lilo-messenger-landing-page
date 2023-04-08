import styles from "./YellowButton.module.scss";
import { FC } from "react";

interface IYellowButtonProps {
  title: string;
  className?: string;
}

export const YellowButton: FC<IYellowButtonProps> = ({ title, className }) => {
  return (
    <button className={className + " " + styles.button}>
      <span>{title}</span>
    </button>
  );
};
