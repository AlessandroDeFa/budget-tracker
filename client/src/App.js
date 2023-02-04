import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Statistics/Analytics";
import { Budget } from "./pages/Budget/Budget";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [transactions, setTransactions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  //fetch data from database to client

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/api/get");
      const data = await response.json();
      setTransactions(data);
    }
    fetchData();

    setFormSubmitted(false);
  }, [formSubmitted]);

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              toggleTheme={toggleTheme}
              transactions={transactions}
              setTransactions={setTransactions}
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />
          }
        />
        <Route
          path="/analytics"
          element={
            <Analytics
              toggleTheme={toggleTheme}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
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
