import useSWRImmutable from "swr/immutable";
import { API_ROUTES } from "./constants";

export const useGetExchangeRates = () => {
  const { data, error, ...rest } = useSWRImmutable(
    API_ROUTES.GET_EXCHANGE_RATES
  );

  return {
    loading: !data && !error,
    error,
    data: data,
    ...rest,
  };
};
