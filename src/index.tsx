import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import responsiveTheme from "./theme";
import SwrProvider from "./context/SwrContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SwrProvider>
    <ThemeProvider theme={responsiveTheme}>
      <App />
    </ThemeProvider>
  </SwrProvider>
);
