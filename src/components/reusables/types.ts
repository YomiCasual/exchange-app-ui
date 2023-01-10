import { OutlinedTextFieldProps, SelectProps } from "@mui/material";

export interface CustomInputProps
  extends Partial<Omit<OutlinedTextFieldProps, "variant">> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hasError?: boolean;
  helperText?: string;
  label?: string;
}

export interface SelectInputProps
  extends Pick<CustomInputProps, "onChange" | "onBlur">,
    Partial<Omit<SelectProps, "onChange" | "onBlur">> {
  id?: string;
  label?: string;
  name?: string;
  options: any;
  hasError?: boolean;
  helperText?: string;
  inputProps?: {
    maxLength?: number;
    inputMode?:
      | "text"
      | "url"
      | "email"
      | "search"
      | "none"
      | "tel"
      | "numeric"
      | "decimal";
  };
  value?: any;
}
