import React from "react";
import { Controller } from "react-hook-form";
import { useWindowSize } from "../hooks";
import { convertToSelectFieldsOptions } from "../libs";
import {
  CustomButton,
  CustomDatePicker,
  CustomSelectInput,
} from "../reusables";
import { useHistoryFilterForm } from "./hooks";

const HistoryFilterForm = () => {
  const { control, onSubmit, handleClearFilter } = useHistoryFilterForm();

  const { isMobile } = useWindowSize();

  return (
    <form className=" flex items-center gap-4 py-4 mb-5 " onSubmit={onSubmit}>
      <Controller
        name="fromDate"
        control={control}
        render={({ field }) => {
          return (
            <CustomDatePicker
              label={isMobile ? "Start Date" : "From date"}
              {...field}
            />
          );
        }}
      />
      <Controller
        name="toDate"
        control={control}
        render={({ field }) => {
          return (
            <CustomDatePicker
              label={isMobile ? "End Date" : "To date"}
              {...field}
            />
          );
        }}
      />
      {!isMobile && (
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
      )}
      <CustomButton label="Filter" buttonType="outlined" type="submit" />
      {!isMobile && (
        <CustomButton
          label="Clear Filter"
          buttonType="secondary"
          type="button"
          onClick={handleClearFilter}
        />
      )}
    </form>
  );
};

export default HistoryFilterForm;
