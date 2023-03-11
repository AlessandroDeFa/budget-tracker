import React from "react";
import "./expenseBudget.css";
import { IoMdTrash } from "react-icons/io";
import { Button } from "@mui/material";
import { useContext } from "react";
import { ContextApp } from "../../App";

export const ExpenseBudget = ({ expense }) => {
  const {
    setFormExpenseBudgetSubmitted,
    setErrorDel,
    setSuccesDelExpenseBudget,
  } = useContext(ContextApp);

  const deleteExpenseBudget = (id) => {
    setFormExpenseBudgetSubmitted(true);
    fetch(`https://budget-trackerdb.herokuapp.com/api/delete-expense/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          setErrorDel(true);
          throw new Error("Failed to delete transaction");
        }
        setSuccesDelExpenseBudget(response);
      })
      .catch((error) => {
        setErrorDel(true);
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <li className="list-expenses">
      <div>{expense.expense_name}</div>
      <div>
        <span className="amount-expense-budget">{`€ ${Math.abs(
          expense.expense_amount
        )}`}</span>
        <Button
          variant="text"
          className="btn-exit-info"
          onClick={() => deleteExpenseBudget(expense.expense_id)}
        >
          <IoMdTrash className="icon-del" />
        </Button>
      </div>
    </li>
  );
};
