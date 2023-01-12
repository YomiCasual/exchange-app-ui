import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import responsiveTheme from "./theme";
import SwrProvider from "./context/SwrContext";
import { AppContextProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <SwrProvider>
      <AppContextProvider>
        <ToastContainer
          icon
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          limit={1}
          pauseOnHover
        />
        <ThemeProvider theme={responsiveTheme}>
          <App />
        </ThemeProvider>
      </AppContextProvider>
    </SwrProvider>
  </>
);
