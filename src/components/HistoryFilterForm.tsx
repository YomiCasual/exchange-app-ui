import { TextField, Typography } from "@mui/material";
import React from "react";
import {
  CustomButton,
  CustomDatePicker,
  CustomSelectInput,
} from "../reusables";

const HistoryFilterForm = () => {
  return (
    <div className=" flex items-center gap-4 py-4  ">
      <CustomDatePicker label="From date" />
      <CustomDatePicker label="To date" />
      <CustomSelectInput options={[]} label="Type" fullWidth={false} />
      <CustomButton label="Filter" buttonType="outlined" />
    </div>
  );
};

export default HistoryFilterForm;
