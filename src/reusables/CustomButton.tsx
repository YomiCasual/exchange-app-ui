// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { LoadingButton } from "@mui/lab";
import { forwardRef } from "react";
import MuiButton from "@mui/material/Button";

import { CustomButtonProps } from "../types";
import { customButtonTypes } from "./constant";

/** JSX Element for all button type */
export const CustomButton = forwardRef(
  (
    {
      children,
      buttonType = "primary",
      loading,
      sx,
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
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";
