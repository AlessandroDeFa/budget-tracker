import React from "react";
import "./transaction.css";
import { Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { MdMode } from "react-icons/md";
import { useContext } from "react";
import { ContextApp } from "../../App";
import { IoMdTrash } from "react-icons/io";

export const Transaction = ({ transaction, activeFormUpdate }) => {
  const formatted_date = transaction.data_entry.split("T")[0];
  const { setFormSubmitted, form, formUpdate, setErrorDel, setSuccessDel } =
    useContext(ContextApp);

  const deleteTransaction = (id) => {
    setFormSubmitted(true);
    fetch(`https://budget-tracker-server.onrender.com/api/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          setErrorDel(true);
          throw new Error("Failed to delete transaction");
        }
        setSuccessDel(response);
      })
      .catch((error) => {
        setErrorDel(true);
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <li>
      <div className="container-transaction">
        <div className="left-info-transaction">
          <div>{transaction.category}</div>
          <div>{formatted_date}</div>
          <div className="name-transaction">{transaction.name}</div>
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
              size="small"
              onClick={form ? () => {} : () => activeFormUpdate(transaction.id)}
              variant="text"
              className="btn-exit-form btns-transaction "
            >
              <MdMode className="icon-modify" />
            </Button>

            <Button
              size="small"
              onClick={
                form || formUpdate
                  ? () => {}
                  : () => deleteTransaction(transaction.id)
              }
              variant="text"
              className="btn-exit-form btns-transaction "
            >
              <IoMdTrash className="icon-del" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
