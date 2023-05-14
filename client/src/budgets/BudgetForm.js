import Axios from "axios";
import React, { useState } from "react";
import BudgetOverview from "./BudgetOverview";
import "Shared/style.css";

const BudgetForm = () => {
  const [budgetName, setBudgetName] = useState("");
  const [budgetBalance, setBudgetBalance] = useState(0);
  const [budgetLimit, setBudgetLimit] = useState(0);
  const [budgetDate, setBudgetDate] = useState(null);
  const [budgetNote, setBudgetNote] = useState("");

  const submitBudget = () => {
    Axios.post("http://localhost:3001/api/insert", {
      budgetName: budgetName,
      budgetBalance: budgetBalance,
      budgetLimit: budgetLimit,
      budgetDate: budgetDate,
      budgetNote: budgetNote,
    }).then(alert("Successfully inserted (refresh to update list)"));
  };

  return (
    <div className="budgetForm">
      <div className="form">
        <label>Budget Name:</label>
        <input
          type="text"
          name="budgetName"
          onChange={(e) => {
            setBudgetName(e.target.value);
          }}
        />

        <label>Budget Balance:</label>
        <input
          type="text"
          name="budgetBalance"
          onChange={(e) => {
            setBudgetBalance(e.target.value);
          }}
        />

        <label>Budget Limit:</label>
        <input
          type="text"
          name="budgetLimit"
          onChange={(e) => {
            setBudgetLimit(e.target.value);
          }}
        />

        <label>Budget Date:</label>
        <input
          type="date"
          name="budgetDate"
          onChange={(e) => {
            setBudgetDate(e.target.value);
          }}
        />

        <label>Budget Note:</label>
        <input
          type="text"
          name="budgetNote"
          onChange={(e) => {
            setBudgetNote(e.target.value);
          }}
        />

        <button onClick={submitBudget}>Submit</button>
        <div className="chart">
          <BudgetOverview />
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
