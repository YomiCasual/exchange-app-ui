import { forwardRef, Ref } from "react";
import { TextField } from "@mui/material";

import { CustomInputProps } from "./types";

/** Component for all text inputs (text, email and so on) */
export const CustomInput = forwardRef(
  (
    {
      name,
      type = "text",
      id,
      helperText = "",
      hasError = false,
      ...rest
    }: CustomInputProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <TextField
        ref={ref}
        fullWidth
        {...rest}
        InputLabelProps={{ shrink: true, htmlFor: name || id }}
        name={name ?? id}
        id={id ?? name}
        variant="outlined"
        error={hasError as boolean}
        helperText={helperText}
      />
    );
  }
);

CustomInput.displayName = "TextInput";
