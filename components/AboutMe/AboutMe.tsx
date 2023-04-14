import { FC } from "react";
import styles from "./AboutMe.module.scss";
import Image from "next/image";
import coderImg from "../../public/images/coder.png";
import { Container, СontainerVariant } from "@/layouts/Container/Container";
import classNames from "classnames";

export const AboutMe: FC = () => {
  return (
    <Container variant={СontainerVariant.primary}>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMe__right}>
          <h2 className={classNames(styles.aboutMe__title, "h2")}>Обо Мне</h2>
          <div className={styles.aboutMe__textBlock}>
            <p className={classNames(styles.aboutMe__text, "primary_text")}>
              Мотивированный разработчик React с годовым опытом создания
              современных веб-приложений.
            </p>
            <p className={classNames(styles.aboutMe__text, "primary_text")}>
              Обладаю навыками написания хорошо структурированного и удобного в
              сопровождении кода, а также использования библиотек и фреймворков
              для создания плавного и отзывчивого взаимодействия с
              пользователем.
            </p>

            <p className={classNames(styles.aboutMe__text, "primary_text")}>
              Умею отлаживать и реорганизовывать существующий код, а также
              выполнять проекты вовремя и в рамках бюджета.
            </p>
          </div>
        </div>
        <div className={styles.aboutMe__left}>
          <Image alt="img" className={styles.aboutMe__coder} src={coderImg} />
        </div>
      </div>
    </Container>
  );
};
