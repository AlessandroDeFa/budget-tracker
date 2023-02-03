import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Transactions } from "../../components/Transactions/Transactions";
import { Balance } from "../../components/Balance/Balance";
import { IncomeExpenses } from "../../components/IncomeExpenses/IncomeExpenses";
import { AddTransaction } from "../../components/AddTransaction/AddTransaction";
import "./dashboard.css";

export const Dashboard = ({ toggleTheme, transactions, setTransactions }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Header handleClick={handleClick} toggleTheme={toggleTheme} />
      <div className="flex-1">
        <Sidebar open={sidebarOpen} />
        <div className="main">
          <div className="grid-dashboard">
            <Balance />
            <IncomeExpenses />
            <AddTransaction
              transactions={transactions}
              setTransactions={setTransactions}
            />
          </div>
          <div>
            <Transactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};
