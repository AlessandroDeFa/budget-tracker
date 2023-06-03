import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Analytics/Analytics";
import { Budget } from "./pages/Budget/Budget";
import { useState, useEffect, createContext } from "react";

export const ContextApp = createContext();

function App() {
  const [form, setForm] = useState(false);
  const [formUpdate, setFormUpdate] = useState(false);
  const [formBudget, setFormBudget] = useState(false);
  const [infoBudget, setInfoBudget] = useState(false);
  const [formAddExpense, setFormAddExpense] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [expenseBudget, setExpenseBudget] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formBudgetSubmitted, setFormBudgetSubmitted] = useState(false);
  const [formExpenseBudgetSubmitted, setFormExpenseBudgetSubmitted] =
    useState(false);
  const [amountNowBudget, setAmountNowBudget] = useState(0);
  const [errorAdd, setErrorAdd] = useState(false);
  const [successAdd, setSuccessAdd] = useState(false);
  const [successDelBudget, setSuccesDelBudget] = useState(false);
  const [successAddBudget, setSuccessAddBudget] = useState(false);
  const [successAddExpenseBudget, setSuccessAddExpenseBudget] = useState(false);
  const [successDelExpenseBudget, setSuccesDelExpenseBudget] = useState(false);
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
      const response = await fetch(
        "https://budget-tracker-server.onrender.com/api/get"
      );
      const data = await response.json();
      setTransactions(data);
    }
    fetchData();

    setFormSubmitted(false);
  }, [formSubmitted]);

  //fetch data budgets from database to client

  useEffect(() => {
    async function fetchDataBudget() {
      const response = await fetch(
        "https://budget-tracker-server.onrender.com/api/get-budgets"
      );
      const data = await response.json();
      setBudgets(data);
    }
    fetchDataBudget();

    setFormBudgetSubmitted(false);
  }, [formBudgetSubmitted]);

  // fetch data expense budget from database to client

  useEffect(() => {
    async function fetchDataExpenseBudget() {
      const response = await fetch(
        "https://budget-tracker-server.onrender.com/api/get-expense-budget"
      );
      const data = await response.json();
      setExpenseBudget(data);
    }
    fetchDataExpenseBudget();

    setFormExpenseBudgetSubmitted(false);
  }, [formExpenseBudgetSubmitted]);

  return (
    <div className={`App ${theme}`}>
      <div
        className={`overlay ${form ? "open" : "closed"} ${
          formUpdate ? "openUpdate" : "closedUpdate"
        } ${formBudget ? "openBudget" : "closedBudget"} ${
          infoBudget ? "openInfoBudget" : "closedInfoBudget"
        } ${formAddExpense ? "openExpense" : "closesExpense"} `}
      ></div>
      <ContextApp.Provider
        value={{
          toggleTheme,
          transactions,
          setTransactions,
          budgets,
          setBudgets,
          expenseBudget,
          setExpenseBudget,
          setFormSubmitted,
          setFormBudgetSubmitted,
          formExpenseBudgetSubmitted,
          setFormExpenseBudgetSubmitted,
          form,
          setForm,
          formUpdate,
          setFormUpdate,
          formBudget,
          setFormBudget,
          infoBudget,
          setInfoBudget,
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
          successAddBudget,
          setSuccessAddBudget,
          successDelBudget,
          setSuccesDelBudget,
          formAddExpense,
          setFormAddExpense,
          setAmountNowBudget,
          amountNowBudget,
          successAddExpenseBudget,
          setSuccessAddExpenseBudget,
          successDelExpenseBudget,
          setSuccesDelExpenseBudget,
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

export default App;
