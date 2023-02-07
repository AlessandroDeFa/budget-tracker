import React, { useState } from "react";
import "./budget.css";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Budgets } from "../../components/Budgets/Budgets";
import { Button } from "@mui/material";

export const Budget = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Header handleClick={handleClick} />
      <div className="flex-1">
        <Sidebar open={sidebarOpen} />
        <div className="main-budget">
          <div className="container-title-budget">
            <div>Budgets</div>
            <div className="btn-budget">
              <Button variant="contained">Add Budget</Button>
              <Button variant="outlined">Add Expense</Button>
            </div>
          </div>
          <Budgets />
        </div>
      </div>
    </div>
  );
};
