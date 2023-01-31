import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
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
        <div className="main">ciao</div>
      </div>
    </div>
  );
};
