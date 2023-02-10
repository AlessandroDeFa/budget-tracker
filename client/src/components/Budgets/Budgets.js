import React, { useState } from "react";
import "./budgets.css";
import { Card } from "react-bootstrap";
import { BudgetCard } from "../Budget-card/BudgetCard";
import { useContext } from "react";
import { ContextApp } from "../../App";
import { InfoBudget } from "../InfoBudget/InfoBudget";
import { AddExpenseBudget } from "../AddExpensesBudget/AddExpenseBudget";

export const Budgets = () => {
  const {
    budgets,
    setInfoBudget,
    infoBudget,
    formAddExpense,
    setFormAddExpense,
    setFormExpenseBudgetSubmitted,
    expenseBudget,
    setErrorAdd,
    setSuccessAddExpenseBudget,
  } = useContext(ContextApp);
  const [categoryBudget, setCategoryBudget] = useState("");
  const [getIdBudget, setIdBudget] = useState(0);
  const [getdateBudget, setDateBudget] = useState("");

  const [amountExpense, setAmountExpense] = useState(0);
  const [nameExpense, setNameExpense] = useState("");

  function handleSubmitExpenseBudget(e) {
    e.preventDefault();
    let error = false;
    if (
      amountExpense === 0 ||
      amountExpense < 0 ||
      amountExpense === "" ||
      !nameExpense
    ) {
      error = true;
      setErrorAdd(true);
    }

    if (!error) {
      setFormExpenseBudgetSubmitted(true);
      fetch("http://localhost:3001/api/insert-expense-budget", {
        method: "POST",
        body: JSON.stringify({
          getIdBudget: getIdBudget,
          amountExpense: amountExpense,
          nameExpense: nameExpense,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setAmountExpense(0);
          setNameExpense("");
          setSuccessAddExpenseBudget(response);
        })
        .catch((error) => {
          setErrorAdd(error);
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }

  const calculateExpenseTotals = (expenseBudgets) => {
    const expenseTotals = new Map();

    expenseBudgets.forEach((expense) => {
      const budgetId = expense.budget_id;
      const expenseAmount = expense.expense_amount;
      if (expenseTotals.has(budgetId)) {
        expenseTotals.set(
          budgetId,
          expenseTotals.get(budgetId) + expenseAmount
        );
      } else {
        expenseTotals.set(budgetId, expenseAmount);
      }
    });

    return expenseTotals;
  };

  const expenseTotals = calculateExpenseTotals(expenseBudget);

  return (
    <div className="budgets-card-container">
      <div className="budgets-info">
        <div>Category</div>
        <div>Current Amount / Max Amount</div>
      </div>
      <InfoBudget
        setInfoBudget={setInfoBudget}
        infoBudget={infoBudget}
        categoryBudget={categoryBudget}
        getIdBudget={getIdBudget}
        getdateBudget={getdateBudget}
      />
      <AddExpenseBudget
        setFormAddExpense={setFormAddExpense}
        formAddExpense={formAddExpense}
        amountExpense={amountExpense}
        nameExpense={nameExpense}
        setAmountExpense={setAmountExpense}
        setNameExpense={setNameExpense}
        handleSubmitExpenseBudget={(e) => handleSubmitExpenseBudget(e)}
      />
      <ul className="container-list-budgets">
        {budgets
          .sort((a, b) => b.id - a.id)
          .map((budget) => (
            <BudgetCard
              key={budgets.id}
              budget={budget}
              setInfoBudget={setInfoBudget}
              setCategoryBudget={setCategoryBudget}
              setIdBudget={setIdBudget}
              setDateBudget={setDateBudget}
              expenseTotals={expenseTotals}
            />
          ))}
      </ul>
    </div>
  );
};
