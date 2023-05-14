import Axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "Shared/style.css";

const EditBudget = () => {
  const [budgetName, setBudgetName] = useState("");
  const [budgetBalance, setBudgetBalance] = useState(0);
  const [budgetLimit, setBudgetLimit] = useState(0);
  const [budgetDate, setBudgetDate] = useState(null);
  const [budgetNote, setBudgetNote] = useState("");

  const { state } = useLocation();
  const { budgetId } = state;
  const navigate = useNavigate();

  const editBudget = () => {
    Axios.put(`http://localhost:3001/api/put/${budgetId}`, {
      budgetName: budgetName,
      budgetBalance: budgetBalance,
      budgetLimit: budgetLimit,
      budgetDate: budgetDate,
      budgetNote: budgetNote,
    }).then(alert("Successfully updated (go back to update list)"));
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

        <button onClick={editBudget}>Edit</button>
      </div>
      <button onClick={() => navigate("/budgets", {})}>Go back</button>
    </div>
  );
};

export default EditBudget;
