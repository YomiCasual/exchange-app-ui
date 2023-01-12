import { forwardRef, Ref } from "react";
import { TextField } from "@mui/material";

import { CustomInputProps } from "./types";

/** Component for all text inputs (text, email and so on) */
export const CustomInput = forwardRef(
  (
    { name, id, helperText = "", hasError = false, ...rest }: CustomInputProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <TextField
        ref={ref}
        fullWidth
        InputLabelProps={{ shrink: true, htmlFor: name || id }}
        name={name ?? id}
        id={id ?? name}
        variant="outlined"
        error={hasError as boolean}
        helperText={helperText}
        {...rest}
      />
    );
  }
);

CustomInput.displayName = "TextInput";
