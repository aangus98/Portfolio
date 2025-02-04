import React, { useState } from "react";
import "./index.css";
import Map from "./components/Map";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme", !darkMode); // Toggle dark theme class
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <Map />
    </div>
  );
};

export default App;
