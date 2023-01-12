import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ListItemText } from "@mui/material";
import { SelectInputProps } from "./types";

export const CustomSelectInput = ({
  options,
  onChange,
  name,
  id,
  label,
  helperText,
  hasError,
  required,
  disabled,
  ...rest
}: SelectInputProps) => {
  const handleChange = (event: any) => {
    onChange?.(event?.target?.value);
  };
  console.log({ value: rest?.value });

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      required={required}
      disabled={disabled}
      fullWidth={rest?.fullWidth}
    >
      {label && (
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      )}
      <Select
        labelId={id}
        id={id}
        label="Age"
        name={name}
        onChange={(event: any) => handleChange(event)}
        {...rest}
        value={rest?.value?.value}
      >
        {options.map((option: any) => (
          <MenuItem key={option?.value} value={option?.value}>
            <ListItemText primary={option?.label} />
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
