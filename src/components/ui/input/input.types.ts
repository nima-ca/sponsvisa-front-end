import { InputProps as ChakraInputProps } from "@chakra-ui/react";

export interface InputProps extends Omit<ChakraInputProps, `size`> {}
