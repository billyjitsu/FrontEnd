import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/theme";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Appp from "./Appp";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Appp />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
