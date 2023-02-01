import React from "react";
import "./incomeExpenses.css";
import { SlGraph } from "react-icons/sl";

export const IncomeExpenses = () => {
  return (
    <div>
      <div className="container-inc-exp">
        <div className="income-expenses">
          <div>
            <SlGraph className="graph-icon income" />
          </div>
          <div>
            <div className="title-income">Income</div>
            <div className="income">
              <span>5.700,00</span>
              <span>€</span>
            </div>
          </div>
        </div>
        <div className="income-expenses">
          <div>
            <SlGraph className="graph-icon expenses" />
          </div>
          <div>
            <div>Expense</div>
            <div className="expenses">
              <span>2.700,00</span>
              <span>€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
