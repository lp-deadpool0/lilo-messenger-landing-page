import styles from "./Hero.module.scss";
import { YellowButton } from "../YellowButton/YellowButton";
import { FC } from "react";
import { Container, СontainerVariant } from "@/layouts/Container/Container";
import classNames from "classnames";

export const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <Container variant={СontainerVariant.primary}>
        <div className={styles.hero__body}>
          <h1 className={styles.hero__title}>
            вкуси лучший опыт с LILO MESSENGER
          </h1>
          <p className={classNames(styles.hero__subtitle, "primary_text")}>
            Быстрый, Безопастный, Стильный. <br /> Один из лучших инструментов
            для коммуникации
          </p>

          <YellowButton title="Давайте начнем" />

          <div className={styles["bg-lights-1"]} />
          <div className={styles["bg-lights-2"]} />
        </div>
      </Container>
    </div>
  );
};
