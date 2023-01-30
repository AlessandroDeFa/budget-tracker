import React from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Dashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <div></div>
    </div>
  );
};
