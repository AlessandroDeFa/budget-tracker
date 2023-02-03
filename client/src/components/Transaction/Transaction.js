import React from "react";
import "./transaction.css";

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
          <div className="amount-transaction income-transaction">
            {transaction.amount}
          </div>
          <div>{transaction.note}</div>
        </div>
      </div>
    </li>
  );
};

// sistemare il layput delle transaioni quindi nel css
