import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

export enum СontainerVariant {
  primary = "primary",
  withoutMargins = "withoutMargins",
  withoutMarginsCentered = "withoutMarginsCentered",
}

interface IContainerProps {
  variant: СontainerVariant;
  className?: string;
}

export const Container: FC<PropsWithChildren<IContainerProps>> = ({
  children,
  variant,
  className,
}) => {
  const variantSwitchHandler = (variant: string) => {
    switch (variant) {
      case СontainerVariant.primary:
        return "container";
      case СontainerVariant.withoutMargins:
        return "container-without-margin";
      case СontainerVariant.withoutMarginsCentered:
        return "container-without-margin_centered";
      default:
        return "container";
    }
  };

  return (
    <div
      className={classNames(styles[variantSwitchHandler(variant)], className)}>
      {children}
    </div>
  );
};
