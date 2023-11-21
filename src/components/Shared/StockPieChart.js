// StockPieChart.js
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const StockPieChart = ({ stocks }) => {
  const data = stocks.map((stock) => ({
    name: stock.name,
    value: stock.quantity,
  }));

  const COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56" /* Add more colors as needed */,
  ];

  return (
    <PieChart width={200} height={200}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default StockPieChart;
