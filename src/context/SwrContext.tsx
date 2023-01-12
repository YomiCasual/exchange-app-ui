/* eslint-disable @typescript-eslint/no-explicit-any */
import { SWRConfig } from "swr";
import { ReactNode } from "react";
import http from "../api/resources/http";

// Custom Imports

/** Wrap with SWR Config provider */
const SwrProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  // Get request method

  const makeRequest = http();

  // Construct Swr fetcher
  const fetcher = (...url: string[]) => {
    const requests = (singleUrl: string) =>
      makeRequest.get(singleUrl).then((res) => res?.data?.data);
    if (url.length > 1) {
      return Promise.all(url.map(requests));
    }
    return makeRequest.get(url[0]).then((res) => res?.data?.data);
  };

  return (
    <SWRConfig
      value={{
        dedupingInterval: 50000,
        fetcher,
        focusThrottleInterval: 90000,
        shouldRetryOnError: false,
        errorRetryCount: 2,
        onError: async (error: any) => {
          //Check if the error status code is for expired token code
          console.error({ error: error.response });
        },
        // refreshInterval: 60000,
        revalidateOnFocus: true,
        revalidateIfStale: true,
        revalidateOnReconnect: false,
        refreshWhenHidden: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrProvider;
