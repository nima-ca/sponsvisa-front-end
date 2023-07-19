import { FC } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";
import { InputProps } from "./input.types";
import styles from "./input.module.scss";

const Input: FC<InputProps> = ({ isInvalid, className, ...props }) => {
  return (
    <ChakraInput
      size="md"
      variant="outline"
      isInvalid={isInvalid}
      errorBorderColor="red.600"
      focusBorderColor="orange.500"
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};

export default Input;
