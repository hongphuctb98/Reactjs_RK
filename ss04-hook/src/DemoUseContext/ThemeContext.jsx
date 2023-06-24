import { useState, createContext } from "react";

const ThemeContext = createContext({ childrent });

function ThemeProvider() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeContext value={theme}>{childrent}</ThemeContext>
    </div>
  );
}

export { ThemeProvider, ThemeContext };
