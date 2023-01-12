import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { convertToSelectFieldsOptions } from "../libs";
import {
  CustomButton,
  CustomDatePicker,
  CustomSelectInput,
} from "../reusables";
import { useHistoryFilterForm } from "./hooks";

const HistoryFilterForm = () => {
  const { control, onSubmit } = useHistoryFilterForm();

  return (
    <form className=" flex items-center gap-4 py-4" onSubmit={onSubmit}>
      <Controller
        name="fromDate"
        control={control}
        render={({ field }) => {
          return <CustomDatePicker label="From date" {...field} />;
        }}
      />
      <Controller
        name="toDate"
        control={control}
        render={({ field }) => {
          return <CustomDatePicker label="To date" {...field} />;
        }}
      />
      <Controller
        name="type"
        control={control}
        render={({ field }) => {
          return (
            <CustomSelectInput
              options={convertToSelectFieldsOptions([
                "all",
                "LIVE_PRICE",
                "EXCHANGED",
              ])}
              label="Type"
              fullWidth={false}
              {...field}
            />
          );
        }}
      />
      <CustomButton label="Filter" buttonType="outlined" type="submit" />
    </form>
  );
};

export default HistoryFilterForm;
