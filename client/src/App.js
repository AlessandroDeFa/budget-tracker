import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Statistics/Analytics";
import { Budget } from "./pages/Budget/Budget";
import { useState, useEffect, createContext } from "react";

export const ContextApp = createContext();

function App() {
  const [form, setForm] = useState(false);
  const [formUpdate, setFormUpdate] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [transactions, setTransactions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorAdd, setErrorAdd] = useState(false);
  const [successAdd, setSuccessAdd] = useState(false);
  const [errorDel, setErrorDel] = useState(false);
  const [successDel, setSuccessDel] = useState(false);
  const [errorUp, setErrorUp] = useState(false);
  const [successUp, setSuccessUp] = useState(false);

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
      <div
        className={`overlay ${form ? "open" : "closed"} ${
          formUpdate ? "openUpdate" : "closedUpdate"
        }`}
      ></div>
      <ContextApp.Provider
        value={{
          toggleTheme,
          transactions,
          setTransactions,
          setFormSubmitted,
          form,
          setForm,
          formUpdate,
          setFormUpdate,
          errorAdd,
          setErrorAdd,
          successAdd,
          setSuccessAdd,
          errorDel,
          successDel,
          setErrorDel,
          setSuccessDel,
          errorUp,
          setErrorUp,
          successUp,
          setSuccessUp,
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </ContextApp.Provider>
    </div>
  );
}

// nav bar con sezioni:
// -statistiche: guardare dashboard sito pirateking
// -pianificazione(da decidere nel tempo): guardare app wallet su pianificarione

export default App;
