import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { DAppProvider } from "@usedapp/core";
import { GlobalStyle, theme } from "./styles/theme";
import App from "./App";
import "remixicon/fonts/remixicon.css";

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
