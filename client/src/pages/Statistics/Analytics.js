import React, { useState } from "react";
import "./analytics.css";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Transactions } from "../../components/Transactions/Transactions";

export const Analytics = ({ toggleTheme }) => {
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
            <h1>Analytics</h1>
          </div>
          <div>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};
