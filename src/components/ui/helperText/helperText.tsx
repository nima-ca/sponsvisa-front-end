import { FC, PropsWithChildren } from "react";
import styles from "./helperText.module.scss";
import { HelperTextProps } from "./helperText.types";
import { HELPER_TEXT_TEST_ID } from "./helperText.constants";

const HelperText: FC<PropsWithChildren<HelperTextProps>> = ({
  children,
  className,
  error,
}) => {
  return (
    <span
      data-testId={HELPER_TEXT_TEST_ID}
      className={`${className} ${styles.helper} ${error ? styles.error : ``}`}
    >
      {children}
    </span>
  );
};

export default HelperText;
