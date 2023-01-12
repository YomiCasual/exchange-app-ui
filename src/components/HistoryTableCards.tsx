import { Typography } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";
import React from "react";
import { IExchangeRate } from "../api/types";
import { formatNumberToCurrency } from "../libs";

const HistoryTableCards = ({
  rows,
  mobileAction,
}: DataGridProps & {
  mobileAction?: (data: any) => void;
}) => {
  return (
    <div className="space-y-6">
      {rows.map((row: IExchangeRate) => {
        const {
          _id,
          amountFrom,
          amountTo,
          currencyFrom,
          currencyTo,
          unitFrom,
          unitTo,
        } = row;
        return (
          <div
            onClick={() => mobileAction?.(row)}
            key={_id}
            className="bg-gray-100 border px-4 py-6 rounded-lg space-y-1 relative cursor-pointer"
          >
            <Typography component={"h4"} className="!text-lg !font-semibold">
              {currencyFrom} &rarr; {currencyTo}
            </Typography>
            <Typography>
              Amount:{" "}
              {`${unitFrom} ${formatNumberToCurrency({
                number: amountFrom,
              })} =  ${unitTo} ${formatNumberToCurrency({ number: amountTo })}`}
            </Typography>

            <div className="absolute h-4 w-4 rounded-full bg-green-500 top-3 right-4"></div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryTableCards;
