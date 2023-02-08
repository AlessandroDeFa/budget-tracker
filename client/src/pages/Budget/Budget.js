import React, { useState } from "react";
import "./budget.css";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Budgets } from "../../components/Budgets/Budgets";
import { Button } from "@mui/material";
import { FormBudget } from "../../components/FormBudget/FormBudget";
import { useContext } from "react";
import { ContextApp } from "../../App";
import { AlertMessage } from "../../components/AlertMessage/AlertMessage";

export const Budget = () => {
  const { setErrorAdd, setSuccessAdd, setFormBudgetSubmitted } =
    useContext(ContextApp);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formBudget, setFormBudget] = useState(false);

  const [amountBudget, setAmountBudget] = useState(0);
  const [categoryBudget, setCategoryBudget] = useState("");

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // POST data to server

  function handleSubmitBudget(e) {
    e.preventDefault();
    let error = false;
    if (
      amountBudget === 0 ||
      amountBudget < 0 ||
      amountBudget === "" ||
      !categoryBudget
    ) {
      error = true;
      setErrorAdd(true);
    }

    if (!error) {
      setFormBudgetSubmitted(true);
      fetch("http://localhost:3001/api/insert-budget", {
        method: "POST",
        body: JSON.stringify({
          amountBudget: amountBudget,
          categoryBudget: categoryBudget,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setAmountBudget(0);
          setCategoryBudget("");
          setSuccessAdd(response);
        })
        .catch((error) => {
          setErrorAdd(error);
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }

  return (
    <div className="flex">
      <Header handleClick={handleClick} />
      <div className="flex-1">
        <Sidebar open={sidebarOpen} />
        <div className="main-budget">
          <div className="container-title-budget">
            <div>Budgets</div>
            <div className="btn-budget">
              <Button variant="contained" onClick={() => setFormBudget(true)}>
                Add Budget
              </Button>
              <Button variant="outlined">Add Expense</Button>
            </div>
          </div>
          <Budgets />
          <FormBudget
            formBudget={formBudget}
            setFormBudget={setFormBudget}
            amountBudget={amountBudget}
            setAmountBudget={setAmountBudget}
            categoryBudget={categoryBudget}
            setCategoryBudget={setCategoryBudget}
            handleSubmitBudget={(e) => handleSubmitBudget(e)}
          />
          <AlertMessage />
        </div>
      </div>
    </div>
  );
};
