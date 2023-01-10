// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { LoadingButton } from "@mui/lab";
import { forwardRef } from "react";
import MuiButton from "@mui/material/Button";

import { customButtonTypes } from "./constant";
import { CustomButtonProps } from "./types";

/** JSX Element for all button type */
export const CustomButton = forwardRef(
  (
    {
      children,
      buttonType = "primary",
      loading,
      sx,
      label,
      ...rest
    }: CustomButtonProps,
    ref
  ): JSX.Element => {
    // Setting buttonTypeConfig for variant and color based on button type
    const buttonTypeConfig = customButtonTypes?.[buttonType] as {
      variant?: "text" | "outlined" | "contained";
      color?: "primary" | "secondary";
    };

    const Button = loading ? LoadingButton : MuiButton;

    return (
      <Button
        ref={ref}
        {...rest}
        {...(loading && { loading })}
        {...buttonTypeConfig}
        sx={{ ...buttonTypeConfig?.sx, ...sx }}
        disableElevation
      >
        {label ? label : children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";
