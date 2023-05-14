import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "Shared/Table";
import "Shared/style.css";

const BudgetList = (props) => {
  const [currentBudgetBalances, setCurrentBudgetBalances] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      Header: "Budget List",
      columns: [
        {
          Header: "Budget Id",
          accessor: "budgetId",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Balance",
          accessor: "budgetBalance",
        },
        {
          Header: "Limit",
          accessor: "budgetLimit",
        },
        {
          Header: "Date",
          accessor: "date",
          Cell: ({ cell: { value } }) => {
            var d = new Date(value),
              month = "" + (d.getMonth() + 1),
              day = "" + d.getDate(),
              year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
          },
        },
        {
          Header: "Note",
          accessor: "note",
        },
        {
          Header: "Delete",
          Cell: ({ row }) => (
            <button
              className="colButton"
              onClick={() => deleteBudget(row.values.budgetId)}
            >
              Delete
            </button>
          ),
        },
        {
          Header: "Edit",
          Cell: ({ row }) => (
            <button
              className="colButton"
              onClick={() =>
                navigate("/editBudget", {
                  state: { budgetId: row.values.budgetId },
                })
              }
            >
              Edit
            </button>
          ),
        },
        {
          Header: "Expenses",
          Cell: ({ row }) => (
            <button
              className="colButton"
              onClick={() =>
                navigate("/expenses", {
                  state: { budgetId: row.values.budgetId },
                })
              }
            >
              View
            </button>
          ),
        },
        {
          Header: "Incomes",
          Cell: ({ row }) => (
            <button
              className="colButton"
              onClick={() =>
                navigate("/incomes", {
                  state: { budgetId: row.values.budgetId },
                })
              }
            >
              View
            </button>
          ),
        },
      ],
    },
  ];

  const deleteBudget = (budgetId) => {
    Axios.delete(`http://localhost:3001/api/delete/${budgetId}`).then(
      alert("Successfully deleted (refresh to update list)")
    );
  };

  useEffect(() => {
    const budgetGetRequestUrl = "http://localhost:3001/api/getBudgetBalances";
    Axios.get(budgetGetRequestUrl).then((response) => {
      setCurrentBudgetBalances(response.data);
    });
  }, []);

  return (
    <div className="list">
      <Table columns={columns} data={currentBudgetBalances} />
    </div>
  );
};

export default BudgetList;
