import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { formatUnderScoreAndCapitalize } from "./libs";

export const commonColumnProps: Omit<GridColDef, "field"> = {
  align: "left",
  headerAlign: "left",
  flex: 1,
  headerClassName: "!border-hippo-light-gray focus-within:!outline-none",
  sortable: false,
};

export const HISTORY_TABLE_COLUMNS: GridColDef[] = [
  {
    ...commonColumnProps,
    field: "createdAt",
    headerName: "Date & Time",
    description: "The date and time created",
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
  },
  {
    ...commonColumnProps,
    field: "type",
    headerName: "Type",
    description: "The type",
    valueGetter: (data: any) => {
      return formatUnderScoreAndCapitalize(data.value);
    },
  },
];
