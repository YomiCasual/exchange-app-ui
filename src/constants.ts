import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

export const commonColumnProps: Omit<GridColDef, "field"> = {
  align: "left",
  headerAlign: "left",
  flex: 1,
  headerClassName: "!border-hippo-light-gray focus-within:!outline-none",
  sortable: false,
};

export const TEST_HISTORY_DATA = {
  rates: [
    {
      name: "Ether",
      unit: "ETH",
      value: 13.078,
      type: "crypto",
      quote_value: {
        currencyFrom: "Ether",
        amountFrom: 1,
        unitFrom: "ETH",
        currencyTo: "US Dollar",
        unitTo: "$",
        amountTo: "1342.671050619",
        type: "EXCHANGED",
      },
    },
    {
      name: "Bitcoin",
      unit: "BTC",
      value: 1,
      type: "crypto",
      quote_value: {
        currencyFrom: "Bitcoin",
        amountFrom: 1,
        unitFrom: "BTC",
        currencyTo: "US Dollar",
        unitTo: "$",
        amountTo: "17559.452000000",
        type: "EXCHANGED",
      },
    },
    {
      name: "XRP",
      unit: "XRP",
      value: 47354.372,
      type: "crypto",
      quote_value: {
        currencyFrom: "XRP",
        amountFrom: 1,
        unitFrom: "XRP",
        currencyTo: "US Dollar",
        unitTo: "$",
        amountTo: "0.370809521",
        type: "EXCHANGED",
      },
    },
    {
      name: "US Dollar",
      unit: "$",
      value: 17559.452,
      type: "fiat",
      quote_value: {
        currencyFrom: "US Dollar",
        amountFrom: 1,
        unitFrom: "$",
        currencyTo: "US Dollar",
        unitTo: "$",
        amountTo: "1.000000000",
        type: "EXCHANGED",
      },
    },
    {
      name: "Euro",
      unit: "€",
      value: 16323.917,
      type: "fiat",
      quote_value: {
        currencyFrom: "Euro",
        amountFrom: 1,
        unitFrom: "€",
        currencyTo: "US Dollar",
        unitTo: "$",
        amountTo: "1.075688635",
        type: "EXCHANGED",
      },
    },
    {
      name: "British Pound Sterling",
      unit: "£",
      value: 14453.589,
      type: "fiat",
      quote_value: {
        currencyFrom: "British Pound Sterling",
        amountFrom: 1,
        unitFrom: "£",
        currencyTo: "US Dollar",
        unitTo: "$",
        amountTo: "1.214885244",
        type: "EXCHANGED",
      },
    },
  ],
};

export const HISTORY_TABLE_COLUMNS: GridColDef[] = [
  {
    ...commonColumnProps,
    field: "createdBy",
    headerName: "Date & Time",
    description: "The date and time created",
    // valueFormatter: ({ value: creatorName }: GridValueFormatterParams) =>
    //   convertToTitleCase(creatorName as unknown as string),
    // flex: 0,
  },
  {
    ...commonColumnProps,
    field: "name",
    headerName: "Currency From",
    description: "The Currency converted from",
  },
  {
    ...commonColumnProps,
    field: "any",
    headerName: "Amount 1",
    description: "The amount from",
    renderCell: (data: any) => {
      return data?.row?.quote_value.amountFrom;
    },
  },
  {
    ...commonColumnProps,
    field: "quote_value",
    headerName: "Currency To",
    description: "The amount to",
    valueGetter: (data: any) => {
      return data.value.currencyTo;
    },
  },
  {
    ...commonColumnProps,
    field: "usd_amount",
    headerName: "Amount 2",
    description: "The amount to",
    renderCell: (data: any) => {
      return data?.row?.quote_value.amountTo;
    },
  },
  {
    ...commonColumnProps,
    field: "currency_type",
    headerName: "Type",
    description: "The type",
    renderCell: (data: any) => {
      return data?.row?.quote_value.type;
    },
  },
];
