import React from "react";
import "./budgets.css";
import { Card } from "react-bootstrap";
import { BudgetCard } from "../Budget-card/BudgetCard";
import { useContext } from "react";
import { ContextApp } from "../../App";

export const Budgets = () => {
  const { budgets } = useContext(ContextApp);

  return (
    <div className="budgets-card-container">
      <div className="budgets-info">
        <div>Category</div>
        <div>Current Amount / Max Amount</div>
      </div>
      <ul className="container-list-budgets">
        {budgets.map((budget) => (
          <BudgetCard key={budgets.id} budget={budget} />
        ))}
      </ul>
    </div>
  );
};
