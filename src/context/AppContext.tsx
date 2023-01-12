import React, { createContext, ReactNode } from "react";
import { useAppHook } from "../hooks";

type AppContextProviderProps = ReturnType<typeof useAppHook> & {};

const AppContext = createContext<AppContextProviderProps>(
  {} as AppContextProviderProps
);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const appHook = useAppHook();

  return (
    <AppContext.Provider value={{ ...appHook }}>{children}</AppContext.Provider>
  );
};

const useAppContext = (): AppContextProviderProps => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("This must be used within a provider");
  }
  return context;
};

export default useAppContext;
