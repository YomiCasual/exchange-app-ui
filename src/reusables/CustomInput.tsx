import { forwardRef, Ref } from "react";
import { TextField } from "@mui/material";

import { CustomInputProps } from "./types";
import { transformNonEventChange } from "../libs";
import { NumericFormat } from "react-number-format";

/** Component for all text inputs (text, email and so on) */
export const CustomInput = forwardRef(
  (
    {
      name,
      id,
      helperText = "",
      hasError = false,
      inputType,
      ...rest
    }: CustomInputProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const isAmount = inputType === "amount";

    if (isAmount) {
      return (
        <NumericFormat
          customInput={TextField}
          variant="outlined"
          valueIsNumericString={true}
          thousandSeparator={true}
          decimalScale={2}
          fullWidth
          name={name}
          label={rest.label}
          onValueChange={(value) => {
            rest?.onChange?.(
              transformNonEventChange({
                name,
                value: value?.value,
              })
            );
          }}
          {...(rest as any)}
        />
      );
    }

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
