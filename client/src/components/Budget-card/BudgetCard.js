import React from "react";
import "./budgetCard.css";
import { useContext } from "react";
import { ContextApp } from "../../App";
import { Card, ProgressBar } from "react-bootstrap";
import { Button } from "@mui/material";

const getProgressvariant = (max, now) => {
  const ratio = now / max;
  if (ratio < 0.5) return "";
  if (ratio < 0.75) return "warning";
  return "danger";
};

const getProgressBg = (max, now) => {
  if (now > max) return "bg-danger";
  return "";
};

const now = 100;

export const BudgetCard = ({
  budget,
  setCategoryBudget,
  setIdBudget,
  expenseTotals,
  setDateBudget,
}) => {
  const {
    setInfoBudget,
    infoBudget,
    formAddExpense,
    setFormAddExpense,
    expenseBudget,
  } = useContext(ContextApp);

  const handleClickInfoBudget = () => {
    setCategoryBudget(budget.category_budgets);
    setInfoBudget(!infoBudget);
    setIdBudget(budget.id);
    setDateBudget(budget.data_entry);
  };

  const handleClickAddExpense = () => {
    setFormAddExpense(!formAddExpense);
    setIdBudget(budget.id);
  };

  const budgetTotal = expenseTotals.get(budget.id) || 0;

  return (
    <li className="list-card-budget">
      <Card className="card-budgets">
        <Card.Body>
          <Card.Title className="card-title">
            <div>{budget.category_budgets}</div>
            <div className={getProgressBg(budget.amount_budgets, budgetTotal)}>
              <span className="min-amount">{budgetTotal}</span> /{" "}
              <span className="max-amount">{budget.amount_budgets}</span>
            </div>
          </Card.Title>
          <ProgressBar
            min={0}
            max={budget.amount_budgets}
            now={budgetTotal}
            className={getProgressvariant(budget.amount_budgets, budgetTotal)}
          />
          <div className="btn-budget-card">
            <Button variant="contained" onClick={handleClickAddExpense}>
              Add Expense
            </Button>
            <Button variant="outlined" onClick={handleClickInfoBudget}>
              View Expenses
            </Button>
          </div>
        </Card.Body>
      </Card>
    </li>
  );
};
