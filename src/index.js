import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageWrapper from "./components/LanguageWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageWrapper>
    <App />
  </LanguageWrapper>
);
