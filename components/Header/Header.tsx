import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import classNames from "classnames";
import { YellowButton } from "../YellowButton/YellowButton";
import { Container, СontainerVariant } from "@/layouts/Container/Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container variant={СontainerVariant.withoutMargins}>
        <div className={styles.header__body}>
          <div className={styles.header__logo}>
            <Image src={logo} alt="logotype" />
          </div>
          <nav className={styles.header__nav}>
            <a
              href="#"
              className={classNames(styles.header__link, "primary_text")}>
              Главная
            </a>
            <a
              href="#"
              className={classNames(styles.header__link, "primary_text")}>
              Приложение
            </a>
            <a
              href="#"
              className={classNames(styles.header__link, "primary_text")}>
              Обо мне
            </a>
          </nav>

          <YellowButton title="Войти" className={styles.header__btn} />
        </div>
      </Container>
    </header>
  );
};
