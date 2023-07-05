import { ButtonProps as MUIButtonProps } from "@mui/material";

export type ButtonProps = Pick<
  MUIButtonProps,
  | `startIcon`
  | `endIcon`
  | `fullWidth`
  | `disabled`
  | `onClick`
  | `variant`
  | `size`
  | `className`
>;
