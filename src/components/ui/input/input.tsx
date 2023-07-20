import { FC } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";
import { InputProps } from "./input.types";
import styles from "./input.module.scss";
import { INPUT_TEST_ID } from "./input.constants";

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <ChakraInput
      size="md"
      variant="outline"
      errorBorderColor="red.600"
      className={`${styles.input} ${className}`}
      data-testId={INPUT_TEST_ID}
      {...props}
    />
  );
};

export default Input;
