import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { CustomDatePickerProps } from "./types";
import { DATE_PICKER_FORMATTER, SECONDARY_DATE_FORMAT } from "../libs";

export const CustomDatePicker = ({
  label,
  onChange,
  name,
  value,
}: CustomDatePickerProps) => {
  const handleChange = (date: Dayjs | null) => {
    if (date) {
      onChange?.(date?.format(SECONDARY_DATE_FORMAT));
    }
  };

  const newValue = dayjs(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label={label}
          inputFormat={DATE_PICKER_FORMATTER}
          value={newValue}
          onChange={handleChange}
          renderInput={(params) => <TextField name={name} {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};
