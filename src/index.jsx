import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Router";
import GlobalStyle from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);
