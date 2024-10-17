import React, { useContext } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./ThemeContext"; 
import Home from "./Home"; // Home sahifasi

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#FFF",
        margin: 0, 
        display: "flex", 
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
