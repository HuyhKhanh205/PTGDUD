import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "./AtomModeTheme";

const ThemeCtrl = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Component B</h2>
      <button
        onClick={toggleTheme}
        style={{
          cursor: "pointer",
          padding: "10px 20px",
          backgroundColor: theme === "light" ? "#333" : "#eee",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Chuyển sang {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ThemeCtrl;
