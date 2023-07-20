import { FC, PropsWithChildren } from "react";
import styles from "./helperText.module.scss";
import { HelperTextProps } from "./helperText.types";

const HelperText: FC<PropsWithChildren<HelperTextProps>> = ({
  children,
  className,
  error,
}) => {
  return (
    <span
      className={`${className} ${styles.helper} ${error ? styles.error : ``}`}
    >
      {children}
    </span>
  );
};

export default HelperText;
