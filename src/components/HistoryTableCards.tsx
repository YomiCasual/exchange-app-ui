import { Typography } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";
import React from "react";
import { IExchangeRate } from "../api/types";

const HistoryTableCards = ({ rows }: DataGridProps) => {
  return (
    <div className="space-y-6">
      {rows.map((row: IExchangeRate, index) => {
        const { quote_value, usd_value } = row;
        return (
          <div
            key={index}
            className="bg-gray-100 border px-4 py-6 rounded-lg space-y-1 relative cursor-pointer"
          >
            {/* <Typography component={"h4"} className="!text-lg !font-semibold">
              {quote_value.name} - {usd_value.name}
            </Typography>
            <Typography>
              Amount:{" "}
              {`${quote_value.unit} ${quote_value.amount} =  ${usd_value.unit} ${usd_value.amount}`}
            </Typography>

            <div className="absolute h-4 w-4 rounded-full bg-green-500 top-3 right-4"></div> */}
          </div>
        );
      })}
    </div>
  );
};

export default HistoryTableCards;
