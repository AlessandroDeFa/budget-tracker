import React, { useState } from "react";
import "./budgets.css";
import { Card } from "react-bootstrap";
import { BudgetCard } from "../Budget-card/BudgetCard";
import { useContext } from "react";
import { ContextApp } from "../../App";
import { InfoBudget } from "../InfoBudget/InfoBudget";

export const Budgets = () => {
  const { budgets, setInfoBudget, infoBudget } = useContext(ContextApp);
  const [categoryBudget, setCategoryBudget] = useState("");

  return (
    <div className="budgets-card-container">
      <div className="budgets-info">
        <div>Category</div>
        <div>Current Amount / Max Amount</div>
      </div>
      <InfoBudget
        setInfoBudget={setInfoBudget}
        infoBudget={infoBudget}
        categoryBudget={categoryBudget}
      />
      <ul className="container-list-budgets">
        {budgets.map((budget) => (
          <BudgetCard
            key={budgets.id}
            budget={budget}
            setInfoBudget={setInfoBudget}
            setCategoryBudget={setCategoryBudget}
          />
        ))}
      </ul>
    </div>
  );
};
