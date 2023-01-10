export interface IExchangeRate {
  name: string;
  unit: string;
  type: string;
  usd_value: {
    from_amount: number;
    from_unit: string;
    to_unit: string;
    to_amount: number;
  };
  one_btc_equivalent: number;
  btc_value: {
    from_amount: 1;
    from_unit: string;
    to_unit: string;
    to_amount: number;
  };
  converted_value: {
    from_amount: 1;
    from_unit: string;
    to_unit: string;
    to_amount: number;
  };
}
