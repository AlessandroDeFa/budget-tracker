import React from "react";
import "./infoBudget.css";
import { Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { ContextApp } from "../../App";
import { ExpenseBudget } from "../ExpensesBudget/ExpenseBudget";

export const InfoBudget = ({
  infoBudget,
  setInfoBudget,
  categoryBudget,
  getIdBudget,
  getdateBudget,
}) => {
  const {
    setFormBudgetSubmitted,
    setSuccesDelBudget,
    setErrorDel,
    expenseBudget,
  } = useContext(ContextApp);

  const deleteBudget = (id) => {
    setFormBudgetSubmitted(true);
    fetch(
      `https://budget-tracker-server.onrender.com/api/delete-budget/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          setErrorDel(true);
          throw new Error("Failed to delete transaction");
        }
        setInfoBudget(false);
        setSuccesDelBudget(response);
      })
      .catch((error) => {
        setErrorDel(true);
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const formatted_date = getdateBudget.split("T")[0];

  return (
    <div className={`info-budget ${infoBudget ? "open" : "closed"}`}>
      <div className="info-container">
        <div className="title-info">
          <div>
            <div>
              Expenses - <span>{categoryBudget}</span>
            </div>
          </div>
          <div className="exit-info-budget">
            <Button
              onClick={() => setInfoBudget(!infoBudget)}
              variant="text"
              className="btn-exit-info"
            >
              <RxCross2 className="icon-exit-info" />
            </Button>
          </div>
        </div>
        <div className="container-expenses">
          <ul className="container-list-expenses">
            {expenseBudget
              .filter((expense) => expense.budget_id === getIdBudget)
              .sort((a, b) => b.expense_id - a.expense_id)
              .map((expense) => (
                <ExpenseBudget
                  key={ExpenseBudget.expense_id}
                  expense={expense}
                />
              ))}
          </ul>
        </div>
        <div className="container-btn-date">
          <div>
            <Button
              color="error"
              variant="outlined"
              onClick={() => deleteBudget(getIdBudget)}
            >
              Delete
            </Button>
          </div>
          <div>{formatted_date}</div>
        </div>
      </div>
    </div>
  );
};
