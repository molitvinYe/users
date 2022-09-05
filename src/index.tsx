import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme } from "./styles/theme";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
