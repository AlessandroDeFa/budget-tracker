import React from "react";
import "./budgetCard.css";
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

export const BudgetCard = ({ budget }) => {
  const formatted_date = budget.data_entry.split("T")[0];

  return (
    <li className="list-card-budget">
      <Card className="card-budgets">
        <Card.Body>
          <Card.Title className="card-title">
            <div>{budget.category_budgets}</div>
            <div className={getProgressBg(budget.amount_budgets, now)}>
              <span className="min-amount">{now}</span> /{" "}
              <span className="max-amount">{budget.amount_budgets}</span>
            </div>
          </Card.Title>
          <ProgressBar
            min={0}
            max={budget.amount_budgets}
            now={now}
            className={getProgressvariant(budget.amount_budgets, now)}
          />
          <div className="btn-budget-card">
            <Button variant="contained">Add Expense</Button>
            <Button variant="outlined">View Expenses</Button>
          </div>
        </Card.Body>
      </Card>
    </li>
  );
};
