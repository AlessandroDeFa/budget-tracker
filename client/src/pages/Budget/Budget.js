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
import { AlertMessasgeDelete } from "../../components/AlertMessageDelete/AlertMessasgeDelete";

export const Budget = () => {
  const {
    setErrorAdd,
    setSuccessAddBudget,
    setFormBudgetSubmitted,
    formBudget,
    setFormBudget,
  } = useContext(ContextApp);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      fetch("https://budget-tracker-server.onrender.com/api/insert-budget", {
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
          setSuccessAddBudget(response);
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
        <div className="main budget">
          <div className="container-title-budget">
            <div>Budgets</div>
            <div>
              <Button variant="contained" onClick={() => setFormBudget(true)}>
                Add Budget
              </Button>
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
          <AlertMessasgeDelete />
        </div>
      </div>
    </div>
  );
};
