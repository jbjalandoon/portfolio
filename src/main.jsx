import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ViewContextProvider from "./store/ViewContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ViewContextProvider>
      <App />
      <div className='absolute h-12 bg-red-600 w-full bottom-0 items-center justify-center bg-opacity-20 flex'>
        <span className='opacity-100'>
          This website is currently on development.
        </span>
      </div>
    </ViewContextProvider>
  </React.StrictMode>
);
