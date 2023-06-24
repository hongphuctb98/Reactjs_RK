import React, { createContext, useState } from "react";
import CompB from "./CompB";
import "./theme.css";
import { ThemeProvider } from "./ThemeContext";

export const themeContext = createContext();
function ParentContext() {
  return (
    <ThemeProvider>
      <div>
        <h2>Demo UseContext</h2>

        <button onClick={handleChangeTheme}>Change Theme</button>
        <CompB />
      </div>
    </ThemeProvider>
  );
}

export default ParentContext;
