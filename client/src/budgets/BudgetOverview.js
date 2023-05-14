import Axios from "axios";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "Shared/style.css";

export const BudgetOverview = () => {
  const [budgetId, setBudgetId] = useState(0);
  const [chartState, setChartState] = useState(null);
  const [showComponent, setShowComponent] = useState(false);

  const random_rgba = () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      0.75 +
      ")"
    );
  };

  const requestOverview = () => {
    const getRequestUrl = `http://localhost:3001/api/request/${budgetId}`;
    Axios.get(getRequestUrl).then((response) => {
      const test = response.data;
      let labels = [];
      let data = [];
      let colours = [];
      let borders = [];
      test.forEach((element) => {
        labels.push(element.type);
        data.push(element.amount);
        let colour = random_rgba();
        colours.push(colour);
        borders.push(colour);
      });
      const chartData = {
        labels: labels,
        datasets: [
          {
            label: "Amount",
            data: data,
            backgroundColor: colours,
            borderColor: borders,
          },
        ],
      };
      setChartState(chartData);
      setShowComponent(true);
    });
  };

  return (
    <div className="budgetOverview">
      <label>Budget to Overview:</label>
      <input
        type="text"
        name="budgetId"
        onChange={(e) => {
          setBudgetId(e.target.value);
        }}
      />
      <button onClick={requestOverview}>Request Overview</button>
      {showComponent ? <Pie data={chartState} /> : null}
    </div>
  );
};

export default BudgetOverview;
