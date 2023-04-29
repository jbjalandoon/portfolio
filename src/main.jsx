import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ViewContextProvider from "./store/ViewContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ViewContextProvider>
      <App />
    </ViewContextProvider>
  </React.StrictMode>
);
