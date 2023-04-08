import styles from "./MobileApp.module.scss";
import { FC } from "react";
import { Container, СontainerVariant } from "@/layouts/Container/Container";
import classNames from "classnames";

export const MobileApp: FC = () => {
  return (
    <div className={styles.app}>
      <Container variant={СontainerVariant.withoutMarginsCentered}>
        <h2 className={classNames(styles.app__title, "h2")}>
          Мобильное приложение уже в разработке
        </h2>
      </Container>
      <div className={styles.liloLogo}></div>
    </div>
  );
};
