import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AnimatedCursor from "react-animated-cursor";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedCursor
      color="219,39,119"
      innerSize={10}
      outerSize={11}
      innerScale={1}
      outerScale={2}
      outerAlpha={1.4}
      hasBlendMode={false}
      outerStyle={{
        border: "219,39,119,0.9",
        mixBlendMode: "exclusion",
      }}
    />
    <App />
  </StrictMode>
);
