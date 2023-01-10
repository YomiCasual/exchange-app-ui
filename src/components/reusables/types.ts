import { OutlinedTextFieldProps } from "@mui/material";

export interface CustomInputProps
  extends Partial<Omit<OutlinedTextFieldProps, "variant">> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hasError?: boolean;
  helperText?: string;
  label?: string;
}
