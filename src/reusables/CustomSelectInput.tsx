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
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

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
        value={value}
        label="Age"
        name={name}
        onChange={(event: any) => handleChange(event)}
        {...rest}
      >
        {options.map((option: any) => (
          <MenuItem key={option?.text} value={option}>
            <ListItemText primary={option?.text} />
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
