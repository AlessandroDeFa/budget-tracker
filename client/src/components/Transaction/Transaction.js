import React from "react";
import "./transaction.css";
import { Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { MdMode } from "react-icons/md";
import { useContext } from "react";
import { ContextApp } from "../../App";

export const Transaction = ({ transaction, activeFormUpdate }) => {
  const formatted_date = transaction.data_entry.split("T")[0];
  const { setFormSubmitted } = useContext(ContextApp);

  const deleteTransaction = (id) => {
    setFormSubmitted(true);
    fetch(`http://localhost:3001/api/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete transaction");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Transaction deleted successfully:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <li>
      <div className="container-transaction">
        <div className="left-info-transaction">
          <div>{transaction.category}</div>
          <div>{formatted_date}</div>
          <div>{transaction.name}</div>
        </div>
        <div className="right-info-transaction">
          <div
            className={`amount-transaction ${
              transaction.amount > 0
                ? "income-transaction"
                : "expenses-transaction"
            } `}
          >
            {transaction.amount > 0
              ? `+€${parseFloat(transaction.amount.toFixed(2))}`
              : `-€${Math.abs(transaction.amount)}`}
          </div>
          <div className="container-note">{transaction.note}</div>
          <div className="container-del-mod">
            <Button
              onClick={() => activeFormUpdate(transaction.id)}
              variant="text"
            >
              <MdMode className="icon-modify" />
            </Button>
            <Button
              onClick={() => deleteTransaction(transaction.id)}
              variant="text"
              className="btn-exit-form"
            >
              <RxCross2 className="icon-del" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
