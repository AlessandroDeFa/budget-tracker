import React from "react";
import "./incomeExpenses.css";
import { SlGraph } from "react-icons/sl";
import { useContext } from "react";
import { ContextApp } from "../../App";

export const IncomeExpenses = () => {
  const { transactions } = useContext(ContextApp);

  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses = amount
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div className="container-inc-exp">
        <div className="income-expenses">
          <div>
            <SlGraph className="graph-icon income" />
          </div>
          <div>
            <div className="exp-inc-text">Income</div>
            <div className="income">
              <span>{income}</span>
              <span>€</span>
            </div>
          </div>
        </div>
        <div className="income-expenses">
          <div>
            <SlGraph className="graph-icon expenses" />
          </div>
          <div>
            <div className="exp-inc-text">Expense</div>
            <div className="expenses">
              <span>{expenses}</span>
              <span>€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
