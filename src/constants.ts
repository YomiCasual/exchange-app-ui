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
      type: "EXCHANGED",
      quote_value: {
        amount: 1,
        unit: "ETH",
        name: "Ether",
      },
      usd_value: {
        unit: "$",
        amount: 1338.123351733,
        name: "US Dollar",
      },
      one_btc_equivalent: 13.044,
      btc_value: {
        unit: "BTC",
        amount: 0.0766636,
        name: "Bitcoin",
      },
      converted_value: {
        unit: "BTC",
        amount: 0.0766636,
        name: "Bitcoin",
      },
    },
    {
      name: "Bitcoin",
      unit: "BTC",
      type: "EXCHANGED",
      quote_value: {
        amount: 1,
        unit: "BTC",
        name: "Bitcoin",
      },
      usd_value: {
        unit: "$",
        amount: 17454.481,
        name: "US Dollar",
      },
      one_btc_equivalent: 1,
      btc_value: {
        unit: "BTC",
        amount: 1,
        name: "Bitcoin",
      },
      converted_value: {
        unit: "BTC",
        amount: 1,
        name: "Bitcoin",
      },
    },
    {
      name: "XRP",
      unit: "XRP",
      type: "EXCHANGED",
      quote_value: {
        amount: 1,
        unit: "XRP",
        name: "XRP",
      },
      usd_value: {
        unit: "$",
        amount: 0.352840006,
        name: "US Dollar",
      },
      one_btc_equivalent: 49468.543,
      btc_value: {
        unit: "BTC",
        amount: 0.000020215,
        name: "Bitcoin",
      },
      converted_value: {
        unit: "BTC",
        amount: 0.000020215,
        name: "Bitcoin",
      },
    },
    {
      name: "US Dollar",
      unit: "$",
      type: "EXCHANGED",
      quote_value: {
        amount: 1,
        unit: "$",
        name: "US Dollar",
      },
      usd_value: {
        unit: "$",
        amount: 1,
        name: "US Dollar",
      },
      one_btc_equivalent: 17454.481,
      btc_value: {
        unit: "BTC",
        amount: 0.000057292,
        name: "Bitcoin",
      },
      converted_value: {
        unit: "BTC",
        amount: 0.000057292,
        name: "Bitcoin",
      },
    },
    {
      name: "Euro",
      unit: "€",
      type: "EXCHANGED",
      quote_value: {
        amount: 1,
        unit: "€",
        name: "Euro",
      },
      usd_value: {
        unit: "$",
        amount: 1.073493534,
        name: "US Dollar",
      },
      one_btc_equivalent: 16259.512,
      btc_value: {
        unit: "BTC",
        amount: 0.000061502,
        name: "Bitcoin",
      },
      converted_value: {
        unit: "BTC",
        amount: 0.000061502,
        name: "Bitcoin",
      },
    },
  ],
  data: {
    msg: "Successfully fetched",
    data: {
      rates: [
        {
          name: "Ether",
          unit: "ETH",
          type: "EXCHANGED",
          quote_value: {
            amount: 1,
            unit: "ETH",
            name: "Ether",
          },
          usd_value: {
            unit: "$",
            amount: 1338.123351733,
            name: "US Dollar",
          },
          one_btc_equivalent: 13.044,
          btc_value: {
            unit: "BTC",
            amount: 0.0766636,
            name: "Bitcoin",
          },
          converted_value: {
            unit: "BTC",
            amount: 0.0766636,
            name: "Bitcoin",
          },
        },
        {
          name: "Bitcoin",
          unit: "BTC",
          type: "EXCHANGED",
          quote_value: {
            amount: 1,
            unit: "BTC",
            name: "Bitcoin",
          },
          usd_value: {
            unit: "$",
            amount: 17454.481,
            name: "US Dollar",
          },
          one_btc_equivalent: 1,
          btc_value: {
            unit: "BTC",
            amount: 1,
            name: "Bitcoin",
          },
          converted_value: {
            unit: "BTC",
            amount: 1,
            name: "Bitcoin",
          },
        },
        {
          name: "XRP",
          unit: "XRP",
          type: "EXCHANGED",
          quote_value: {
            amount: 1,
            unit: "XRP",
            name: "XRP",
          },
          usd_value: {
            unit: "$",
            amount: 0.352840006,
            name: "US Dollar",
          },
          one_btc_equivalent: 49468.543,
          btc_value: {
            unit: "BTC",
            amount: 0.000020215,
            name: "Bitcoin",
          },
          converted_value: {
            unit: "BTC",
            amount: 0.000020215,
            name: "Bitcoin",
          },
        },
        {
          name: "US Dollar",
          unit: "$",
          type: "EXCHANGED",
          quote_value: {
            amount: 1,
            unit: "$",
            name: "US Dollar",
          },
          usd_value: {
            unit: "$",
            amount: 1,
            name: "US Dollar",
          },
          one_btc_equivalent: 17454.481,
          btc_value: {
            unit: "BTC",
            amount: 0.000057292,
            name: "Bitcoin",
          },
          converted_value: {
            unit: "BTC",
            amount: 0.000057292,
            name: "Bitcoin",
          },
        },
        {
          name: "Euro",
          unit: "€",
          type: "EXCHANGED",
          quote_value: {
            amount: 1,
            unit: "€",
            name: "Euro",
          },
          usd_value: {
            unit: "$",
            amount: 1.073493534,
            name: "US Dollar",
          },
          one_btc_equivalent: 16259.512,
          btc_value: {
            unit: "BTC",
            amount: 0.000061502,
            name: "Bitcoin",
          },
          converted_value: {
            unit: "BTC",
            amount: 0.000061502,
            name: "Bitcoin",
          },
        },
      ],
    },
  },
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
    field: "quote_value",
    headerName: "Currency From",
    description: "The Currency converted from",
    valueGetter: (data: any) => {
      return data?.row?.name;
    },
  },
  {
    ...commonColumnProps,
    field: "any",
    headerName: "quote_amount",
    description: "The amount from",
    renderCell: (data: any) => {
      return data?.row?.quote_value.amount;
    },
  },
  {
    ...commonColumnProps,
    field: "usd_value",
    headerName: "Currency To",
    description: "The amount to",
    valueGetter: (data: any) => {
      return data.value.name;
    },
  },
  {
    ...commonColumnProps,
    field: "usd_amount",
    headerName: "Amount 2",
    description: "The amount to",
    renderCell: (data: any) => {
      return data?.row?.usd_value.amount;
    },
  },
  {
    ...commonColumnProps,
    field: "type",
    headerName: "Type",
    description: "The type",
  },
];
