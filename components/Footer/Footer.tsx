import { FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo_icon.svg";
import instagramIcon from "../../public/images/icons/instagram.svg";
import telegramIcon from "../../public/images/icons/telegram.svg";
import googleIcon from "../../public/images/icons/google.svg";
import { Container, СontainerVariant } from "@/layouts/Container/Container";
import classNames from "classnames";

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <Container variant={СontainerVariant.withoutMarginsCentered}>
        <div className={styles.footer__body}>
          <a
            className={classNames(styles.footer__email, "primary_text")}
            href="mailto:lpdead4@gmail.com">
            lpdead4@gmail.com
          </a>
          <div className={styles.footer__logo}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={styles.footer__media_links}>
            <div className={styles.footer__media_link}>
              <Image src={telegramIcon} alt="telegram logo" />
            </div>
            <div className={styles.footer__media_link}>
              <Image src={googleIcon} alt="google logo" />
            </div>
            <div className={styles.footer__media_link}>
              <Image src={instagramIcon} alt="instagram logo" />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles["bg-lights"]} />
    </div>
  );
};
