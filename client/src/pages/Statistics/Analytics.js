import React, { useState } from "react";
import "./analytics.css";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Transactions } from "../../components/Transactions/Transactions";
import { Chart } from "react-google-charts";

export const Analytics = ({ transactions, setTransactions }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const PieChart = ({ data }) => {
    return (
      <Chart
        width={"90%"}
        height={"90%"}
        chartType="PieChart"
        data={data}
        options={{
          backgroundColor: "transparent",
          pieHole: 0.4,
          pieSliceBorderColor: "transparent",
        }}
      />
    );
  };

  const ColumnChart = ({ data }) => {
    return (
      <Chart
        width={"90%"}
        height={"90%"}
        chartType="ColumnChart"
        data={data}
        options={{
          backgroundColor: "transparent",
          pieSliceBorderColor: "transparent",
          title: "Spendings",
          titleTextStyle: {
            fontSize: 25,
            color: "#fff",
          },
        }}
      />
    );
  };

  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];

  return (
    <div className="flex">
      <Header handleClick={handleClick} />
      <div className="flex-1">
        <Sidebar open={sidebarOpen} />
        <div className="main">
          <div className="grid-analytics">
            <div>
              <PieChart data={data} />
            </div>
            <div>
              <ColumnChart data={data} />
            </div>
          </div>

          <div>
            <Transactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};
