import { TextField, Typography } from "@mui/material";
import React from "react";
import { CustomButton, CustomInput, CustomSelectInput } from "../reusables";

const customStyles = {
  //   width: "200px",
};

const ExchangeForm = () => {
  return (
    <header className="shadow-lg bg-white min-h-[150px] flex flex-col justify-center gap-4 pt-20 pb-10 px-8 md:px-0 ">
      <section className="app-container !px-0">
        <Typography variant="h4" className="!font-bold !text-2xl !mb-3">
          Exchange
        </Typography>
        <div className=" flex flex-col md:flex-row items-center gap-4  ">
          <CustomSelectInput
            style={customStyles}
            options={[]}
            label="Currency From"
            fullWidth
          />
          <CustomInput label="Amount" style={customStyles} />
          <p className="hidden md:block">=</p>
          <CustomSelectInput
            style={customStyles}
            options={[]}
            label="Currency From"
            fullWidth
          />
          <CustomInput style={customStyles} label="Amount" />
          <CustomButton
            label="Save"
            buttonType="secondary"
            className="w-full md:max-w-fit"
          />
        </div>
      </section>
    </header>
  );
};

export default ExchangeForm;
