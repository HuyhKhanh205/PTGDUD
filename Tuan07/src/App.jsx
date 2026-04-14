import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Count from "./Components/Count";
import CountCtrl from "./Components/CountCtrl";
import { RecoilRoot } from "recoil";
import ThemeCtrl from "./Components/ThemeCtr";
import ModeTheme from "./Components/ModeTheme";
import { useRecoilValue } from "recoil";
import { themeState } from "./Components/AtomModeTheme";

import Navbar from "./Components/User/Navbar";
import Login from "./Components/User/Login";

import TodoInput from "./Components/TodoList/TodoListInput";
import TodoList from "./Components/TodoList/TodoList";
const ThemeWrapper = ({ children }) => {
  const theme = useRecoilValue(themeState);

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    transition: "all 0.3s ease",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return <div style={appStyle}>{children}</div>;
};

function App() {
  return (
    <RecoilRoot>
      <ThemeWrapper>
        <Count />
        <CountCtrl />
        <ThemeCtrl />
        <ModeTheme />
        <div style={{ fontFamily: "Arial, sans-serif" }}>
          <Navbar />
          <div style={{ padding: "20px" }}>
            <Login />
          </div>
        </div>
        <div
          style={{ textAlign: "center", fontFamily: "Arial", padding: "50px" }}
        >
          <h1>IUH Todo List (Recoil)</h1>
          <TodoInput />
          <TodoList />
        </div>
      </ThemeWrapper>
    </RecoilRoot>
  );
}

export default App;
