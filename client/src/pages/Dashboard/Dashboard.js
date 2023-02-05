import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Transactions } from "../../components/Transactions/Transactions";
import { Balance } from "../../components/Balance/Balance";
import { IncomeExpenses } from "../../components/IncomeExpenses/IncomeExpenses";
import { AddTransaction } from "../../components/AddTransaction/AddTransaction";
import "./dashboard.css";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Header handleClick={handleClick} />
      <div className="flex-1">
        <Sidebar open={sidebarOpen} />
        <div className="main">
          <div className="grid-dashboard">
            <Balance />
            <IncomeExpenses />
            <AddTransaction />
          </div>
          <div>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};
