import { TextField } from "@mui/material";
import React from "react";
import { CustomButton, CustomSelectInput } from "../reusables";

const ExchangeForm = () => {
  return (
    <div className="flex">
      <CustomSelectInput options={[]} label="Currency From" />
      <TextField label="Amount" />
      <p>=</p>
      <CustomSelectInput options={[]} label="Currency From" />
      <TextField label="Amount" />
      <CustomButton label="Save" />
    </div>
  );
};

export default ExchangeForm;
