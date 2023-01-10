import { TextField } from "@mui/material";
import React from "react";
import { CustomButton, CustomSelectInput } from "../reusables";

const customStyles = {
  width: "200px",
};

const ExchangeForm = () => {
  return (
    <section className="shadow-xl bg-white ">
      <div className="app-container flex items-center gap-4 min-h-[200px] ">
        <CustomSelectInput
          style={customStyles}
          options={[]}
          label="Currency From"
        />
        <TextField label="Amount" style={customStyles} />
        <p>=</p>
        <CustomSelectInput
          style={customStyles}
          options={[]}
          label="Currency From"
        />
        <TextField style={customStyles} label="Amount" />
        <CustomButton label="Save" />
      </div>
    </section>
  );
};

export default ExchangeForm;
