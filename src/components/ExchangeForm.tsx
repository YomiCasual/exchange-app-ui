import { TextField, Typography } from "@mui/material";
import React from "react";
import { CustomButton, CustomSelectInput } from "../reusables";

const customStyles = {
  width: "200px",
};

const ExchangeForm = () => {
  return (
    <header className="shadow-xl bg-white min-h-[200px] flex flex-col justify-center gap-4 ">
      <section className="app-container">
        <Typography variant="h4" className="!font-bold !text-2xl !mb-3">
          Exchange
        </Typography>
        <div className=" flex items-center gap-4  ">
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
          <CustomButton label="Save" buttonType="secondary" />
        </div>
      </section>
    </header>
  );
};

export default ExchangeForm;
