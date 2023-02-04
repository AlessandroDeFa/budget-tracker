import React from "react";
import "./transaction.css";
import { Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { MdMode } from "react-icons/md";

export const Transaction = ({ transaction }) => {
  const formatted_date = transaction.data_entry.split("T")[0];

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
            {transaction.amount}
          </div>
          <div className="container-note">{transaction.note}</div>
          <div className="container-del-mod">
            <Button
              // onClick={() => setForm(!form)}
              variant="text"
              // className="btn-exit-form"
            >
              <MdMode className="icon-modify" />
            </Button>
            <Button
              // onClick={() => setForm(!form)}
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
