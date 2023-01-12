import React, { createContext, ReactNode } from "react";
import { useAppHook } from "../hooks";

interface AppContextProviderProps {
  historyData: any[];
}

const AppContext = createContext<AppContextProviderProps>({
  historyData: [],
} as AppContextProviderProps);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { historyData } = useAppHook();

  return (
    <AppContext.Provider value={{ historyData }}>
      {children}
    </AppContext.Provider>
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
