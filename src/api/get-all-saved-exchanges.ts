import useSWRImmutable from "swr/immutable";
import { API_ROUTES } from "./constants";

export const useGetAllSavedExchanges = () => {
  const { data, error, ...rest } = useSWRImmutable(
    API_ROUTES.GET_ALL_SAVED_EXCHANGES
  );

  return {
    loading: !data && !error,
    error,
    data: data,
    ...rest,
  };
};
