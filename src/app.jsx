import * as React from "react";
import { createRoot } from "react-dom/client";
import MarketManipulators from "./MarketManipulators.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MarketManipulators />
  </React.StrictMode>
);
