export interface IExchangeRate {
  name: string;
  unit: string;
  type: string;
  usd_value: {
    amount: number;
    name: string;
    unit: string;
  };
  one_btc_equivalent: number;
  quote_value: {
    amount: number;
    name: string;
    unit: string;
  };
  converted_value: {
    amount: number;
    name: string;
    unit: string;
  };
}
