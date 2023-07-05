"use client";

import { FC, PropsWithChildren } from "react";
import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "./button.types";
import styles from "./button.module.scss";

import { cva } from "class-variance-authority";
import { SpinnerIcon } from "@src/components/icons/spinner";

export const buttonVariants = cva(`${styles.button}`, {
  variants: {
    variant: {
      text: `${styles.button__text}`,
      outlined: `${styles.button__outlined}`,
      contained: `${styles.button__contained}`,
    },
  },
  defaultVariants: {
    variant: `text`,
  },
});

export const BUTTON_TEST_ID = `button`;

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  isLoading,
  disabled,
  variant,
  endIcon,
  ...props
}) => {
  return (
    <MUIButton
      data-testid={BUTTON_TEST_ID}
      className={buttonVariants({ className, variant })}
      variant={variant}
      classes={{ disabled: styles[`disabled__${variant ?? `text`}`] }}
      disabled={disabled || isLoading}
      endIcon={isLoading ? <SpinnerIcon /> : endIcon}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
