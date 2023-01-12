import { Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { CustomButton, CustomInput, CustomSelectInput } from "../reusables";
import { useExchangeForm } from "./hooks";

const ExchangeForm = () => {
  const { getCurrenciesSelectFields, control, onSubmit, register } =
    useExchangeForm();

  const { crypto, fiat } = getCurrenciesSelectFields;

  return (
    <header className="shadow-lg bg-white min-h-[150px] flex flex-col justify-center gap-4 pt-20 pb-10 px-8 md:px-0 ">
      <section className="app-container !px-0">
        <Typography variant="h4" className="!font-bold !text-2xl !mb-3">
          Exchange
        </Typography>
        <form
          className=" flex flex-col md:flex-row items-center gap-4"
          onSubmit={onSubmit}
        >
          <Controller
            name="currencyFrom"
            control={control}
            render={({ field }) => {
              return (
                <CustomSelectInput
                  options={crypto}
                  label="Currency From"
                  fullWidth
                  {...field}
                />
              );
            }}
          />

          <CustomInput
            label="Amount 1"
            {...register("amountFrom")}
            type="number"
          />

          <p className="hidden md:block">=</p>
          <Controller
            name="currencyTo"
            control={control}
            render={({ field }) => {
              return (
                <CustomSelectInput
                  options={fiat}
                  label="Currency To"
                  fullWidth
                  {...field}
                />
              );
            }}
          />
          <CustomInput
            label="Amount 2"
            {...register("amountTo")}
            type="number"
            inputProps={{
              readOnly: true,
            }}
          />

          <CustomButton
            label="Save"
            buttonType="secondary"
            type="submit"
            className="w-full md:max-w-fit"
          />
        </form>
      </section>
    </header>
  );
};

export default ExchangeForm;
