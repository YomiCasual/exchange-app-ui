import useSWRImmutable from "swr/immutable";
import { API_ROUTES } from "./constants";

export const useGetSupportedCurrencies = () => {
  const { data, error, ...rest } = useSWRImmutable(
    API_ROUTES.GET_SUPPORTED_CURRENCIES
  );

  return {
    loading: !data && !error,
    error,
    data: data,
    ...rest,
  };
};
