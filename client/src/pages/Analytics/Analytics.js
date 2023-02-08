import React, { useState } from "react";
import "./analytics.css";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Transactions } from "../../components/Transactions/Transactions";
import { Chart } from "react-google-charts";
import { useContext } from "react";
import { ContextApp } from "../../App";

export const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { transactions } = useContext(ContextApp);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const themeStorage = localStorage.getItem("theme");

  // collect pie chart data

  const chartData = transactions.reduce((acc, transaction) => {
    const { category } = transaction;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += 1;
    return acc;
  }, {});

  const pieChartData = Object.entries(chartData).map((entry) => [
    entry[0],
    entry[1],
  ]);
  pieChartData.unshift(["Category", "Total"]);

  // collect bar chart data

  const secondChartData = {};

  transactions.forEach((transaction) => {
    if (transaction.amount < 0) {
      if (secondChartData[transaction.category]) {
        secondChartData[transaction.category] += Math.abs(transaction.amount);
      } else {
        secondChartData[transaction.category] = Math.abs(transaction.amount);
      }
    }
  });

  const barChartData = [];
  for (const [category, total] of Object.entries(secondChartData)) {
    barChartData.push([category, total]);
  }
  barChartData.unshift(["Category", "Total"]);

  const PieChart = ({ data }) => {
    return (
      <Chart
        width={"95%"}
        height={"95%"}
        chartType="PieChart"
        data={data}
        options={{
          legend: {
            position: "bottom",
            textStyle: {
              color: `${themeStorage === "dark" ? "#fefefe" : "#010000"}`,
              fontSize: "16px",
            },
          },
          title: "Distribution",
          titleTextStyle: {
            fontSize: 25,
            color: `${themeStorage === "dark" ? "#bdbcbd" : "#888"}`,
          },
          backgroundColor: "transparent",
          pieHole: 0.4,
          pieSliceBorderColor: "transparent",
        }}
        animation={{
          duration: 1000,
          easing: "out",
        }}
        className={"pie-chart"}
      />
    );
  };

  const BarChart = ({ data }) => {
    return (
      <Chart
        width={"95%"}
        height={"95%"}
        chartType="BarChart"
        data={data}
        options={{
          backgroundColor: "transparent",
          pieSliceBorderColor: "transparent",
          title: "Spendings",
          titleTextStyle: {
            fontSize: 25,
            color: `${themeStorage === "dark" ? "#bdbcbd" : "#888"}`,
          },
          legend: "none",
          hAxis: {
            textStyle: {
              fontSize: 14,
              color: `${themeStorage === "dark" ? "#fefefe" : "#010000"}`,
            },
          },
          vAxis: {
            textStyle: {
              fontSize: 14,
              color: `${themeStorage === "dark" ? "#fefefe" : "#010000"}`,
            },
          },
        }}
      />
    );
  };

  return (
    <div className="flex">
      <Header handleClick={handleClick} />
      <div className="flex-1">
        <Sidebar open={sidebarOpen} />
        <div className="main">
          <div className="grid-analytics">
            <div>
              <PieChart data={pieChartData} />
            </div>
            <div>
              <BarChart data={barChartData} />
            </div>
          </div>

          <div>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};
