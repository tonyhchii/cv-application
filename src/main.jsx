import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GeneralInfo } from "./GeneralInfo";
import "./index.css";
import { EducationInfo } from "./EducationInfo";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
