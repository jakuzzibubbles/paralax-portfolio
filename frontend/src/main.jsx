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
      innerSize={9}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0.4}
      hasBlendMode={false}
      outerStyle={{
        border: "3px solid rgba(244,114,182,0.6)",
        mixBlendMode: "exclusion",
      }}
    />
    <App />
  </StrictMode>
);
