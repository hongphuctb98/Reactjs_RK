import React, { createContext, useState } from "react";
import CompB from "./CompB";
import "./theme.css";

export const themeContext = createContext();
function ParentContext() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div>
      <h2>Demo UseContext</h2>
      {/* TH1 */}
      {/* <button onClick={handleChangeTheme}>Change Theme</button>
      <CompB theme={theme} /> */}
      <themeContext.Provider value={theme}>
        <button onClick={handleChangeTheme}>Change Theme</button>
        <CompB />
      </themeContext.Provider>
    </div>
  );
}

export default ParentContext;
