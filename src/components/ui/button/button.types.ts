import { ButtonProps as MUIButtonProps } from "@mui/material";

export interface ButtonProps
  extends Pick<
    MUIButtonProps,
    | `startIcon`
    | `endIcon`
    | `fullWidth`
    | `disabled`
    | `onClick`
    | `variant`
    | `size`
    | `className`
    | `type`
  > {
  isLoading?: boolean;
}
