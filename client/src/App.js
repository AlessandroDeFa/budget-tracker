import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Statistics/Analytics";
import { Budget } from "./pages/Budget/Budget";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    console.log(theme);
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
// -header: nome account: ospite tasto con black e white mode
// -dashboard: con bilancio totale + opzione di aggiungere una trandazione + trasazioni passate
// -statistiche: guardare dashboard sito pirateking
// -pianificazione(da decidere nel tempo): guardare app wallet su pianificarione

export default App;
