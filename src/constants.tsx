import { formatNumberToCurrency, getFormattedDate } from "./libs/index";
import { GridColDef } from "@mui/x-data-grid";
import { formatUnderScoreAndCapitalize } from "./libs";

export const commonColumnProps: Omit<GridColDef, "field"> = {
  align: "left",
  headerAlign: "left",
  flex: 1,
  headerClassName: "!border-hippo-light-gray focus-within:!outline-none",
  sortable: true,
};

export const HISTORY_TABLE_COLUMNS: GridColDef[] = [
  {
    ...commonColumnProps,
    field: "createdAt",
    headerName: "Date & Time",
    description: "The date and time created",
    valueGetter: (data: any) => {
      return getFormattedDate(data.value);
    },
  },
  {
    ...commonColumnProps,
    field: "currencyFrom",
    headerName: "Currency From",
    description: "The Currency converted from",
  },
  {
    ...commonColumnProps,
    field: "amountFrom",
    headerName: "Amount 1",
    description: "The amount from",
    valueGetter: (data: any) => {
      return formatNumberToCurrency({ number: data.value });
    },
  },
  {
    ...commonColumnProps,
    field: "currencyTo",
    headerName: "Currency To",
    description: "The amount to",
  },
  {
    ...commonColumnProps,
    field: "amountTo",
    headerName: "Amount 2",
    description: "The amount to",
    valueGetter: (data: any) => {
      return formatNumberToCurrency({ number: data.value });
    },
  },
  {
    ...commonColumnProps,
    field: "type",
    headerName: "Type",
    description: "The type",
    renderCell: (data: any) => {
      const value = formatUnderScoreAndCapitalize(data.value);

      const style =
        data.value === "EXCHANGED" ? "text-blue-500" : "text-green-500";
      return <p className={style}>{value}</p>;
    },
  },
];
