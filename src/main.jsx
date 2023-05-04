import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ViewContextProvider from "./store/ViewContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ViewContextProvider>
      <App />
      <div className='absolute bottom-0 flex h-12 w-full items-center justify-center bg-red-600 bg-opacity-20'>
        <span className='opacity-100'>
          This website is currently on development.
        </span>
      </div>
    </ViewContextProvider>
  </React.StrictMode>
);
