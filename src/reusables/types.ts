import { DesktopDatePickerProps, LoadingButtonProps } from "@mui/lab";
import {
  ButtonProps,
  OutlinedTextFieldProps,
  SelectProps,
} from "@mui/material";
import dayjs from "dayjs";
import { FormEvent, MouseEvent } from "react";

export interface CustomInputProps
  extends Partial<Omit<OutlinedTextFieldProps, "variant">> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hasError?: boolean;
  helperText?: string;
  label?: string;
}

export interface OptionProps {
  label: string;
  value: string;
}

export interface SelectInputProps
  extends Pick<CustomInputProps, "onChange" | "onBlur">,
    Partial<Omit<SelectProps, "onChange" | "onBlur">> {
  id?: string;
  label?: string;
  name?: string;
  options: OptionProps[];
  onChange?: any;
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

export interface CustomButtonProps
  extends Omit<ButtonProps, "onClick">,
    Omit<LoadingButtonProps, "onClick" | "classes"> {
  buttonType?: "primary" | "secondary" | "outlined" | "text";
  onClick?: (
    e?: FormEvent<HTMLFormElement> | MouseEvent<HTMLFormElement>
  ) => void;
  target?: string;
  rel?: string;
  label?: string;
}

export interface CustomDatePickerProps extends DesktopDatePickerProps<any> {
  label?: string;
  name?: string;
  onChange?: (value: dayjs.Dayjs | null) => void;
}
