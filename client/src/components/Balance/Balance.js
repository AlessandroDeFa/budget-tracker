import React from "react";
import "./balance.css";
import { RiBankFill } from "react-icons/ri";
import { useContext } from "react";
import { ContextApp } from "../../App";

export const Balance = () => {
  const { transactions } = useContext(ContextApp);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance">
      <div className="title-balance">Balance</div>
      <div className="amount">
        <span>{total}</span>
        <span>EUR</span>
      </div>
      <div className="text-available">Available</div>
      <div className="container-icon">
        <RiBankFill className="icon-balance" />
      </div>
    </div>
  );
};
