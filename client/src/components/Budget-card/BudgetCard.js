import React from "react";
import "./budgetCard.css";
import { Card, ProgressBar } from "react-bootstrap";
import { Button } from "@mui/material";

export const BudgetCard = () => {
  return (
    <Card className="card-budgets">
      <Card.Body>
        <Card.Title className="card-title">
          <div>Enterteinement</div>
          <div>
            <span className="min-amount">200</span> /{" "}
            <span className="max-amount">1000</span>
          </div>
        </Card.Title>
        <ProgressBar min={0} max={2000} now={1000} />
        <div className="btn-budget-card">
          <Button variant="contained">Add Expense</Button>
          <Button variant="outlined">View Expenses</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
