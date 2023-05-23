import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root";
import "./base.scss";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { StudentProvider } from "./context/studenContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <StudentProvider>
        <Root />
      </StudentProvider>
    </ThemeProvider>
  </BrowserRouter>
);
