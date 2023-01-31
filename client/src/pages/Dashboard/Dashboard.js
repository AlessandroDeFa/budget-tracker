import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Transactions } from "../../components/Transactions/Transactions";
import "./dashboard.css";

export const Dashboard = ({ toggleTheme }) => {
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
          <div>
            <div>Balance</div>
            <p>
              <span>€</span>
              <span>192.400,00</span>
            </p>
          </div>
          <div>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};
