import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ListItemText } from "@mui/material";
import { OptionProps, SelectInputProps } from "./types";

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

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      required={required}
      disabled={disabled}
      fullWidth={rest?.fullWidth}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        labelId={id}
        id={"id"}
        label={label}
        name={name}
        onChange={(event: any) => handleChange(event)}
        {...rest}
        value={rest?.value}
        sx={{
          fontSize: "14px",
          "& .MuiTypography-root": {
            fontSize: "14px",
            margin: "0",
            padding: "0",
          },
          "& .MuiListItemText-root": {
            margin: "0",
            height: "18px",
          },
          "& .MuiInputLabel-animated": {
            fontSize: "14px",
            border: "2px solid black!important",
          },
        }}
      >
        {options.map((option: OptionProps) => (
          <MenuItem key={option?.value} value={option?.value}>
            <ListItemText primary={option?.label} sx={{ fontSize: "12px" }} />
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
