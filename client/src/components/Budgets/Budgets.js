import React from "react";
import "./budgets.css";
import { Card } from "react-bootstrap";
import { BudgetCard } from "../Budget-card/BudgetCard";

export const Budgets = () => {
  return (
    <div className="budgets-card-container">
      <div className="budgets-info">
        <div>Category</div>
        <div>Current Amount / Max Amount</div>
      </div>
      <BudgetCard />
    </div>
  );
};
