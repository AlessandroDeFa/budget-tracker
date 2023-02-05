import React, { useState } from "react";
import "./budget.css";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";

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
        <div className="main"></div>
      </div>
    </div>
  );
};
