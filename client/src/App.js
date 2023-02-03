import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Statistics/Analytics";
import { Budget } from "./pages/Budget/Budget";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Dashboard toggleTheme={toggleTheme} />} />
        <Route
          path="/analytics"
          element={<Analytics toggleTheme={toggleTheme} />}
        />
        <Route path="/budget" element={<Budget toggleTheme={toggleTheme} />} />
      </Routes>
    </div>
  );
}

// nav bar con sezioni:
// -statistiche: guardare dashboard sito pirateking
// -pianificazione(da decidere nel tempo): guardare app wallet su pianificarione

export default App;
