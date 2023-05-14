import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "Shared/Table";
import "Shared/style.css";

const ExpenseList = () => {
  const [expenseList, setExpenseList] = useState([]);

  const { state } = useLocation();
  const { budgetId } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const expenseGetRequestUrl = `http://localhost:3001/api/get/expenses/${budgetId}`;
    Axios.get(expenseGetRequestUrl).then((response) => {
      setExpenseList(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      Header: "Expense List",
      columns: [
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Amount",
          accessor: "amount",
        },
        {
          Header: "Type",
          accessor: "type",
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
          Header: "To",
          accessor: "to",
        },
        {
          Header: "Note",
          accessor: "note",
        },
      ],
    },
  ];

  return (
    <div className="expenseList">
      <button onClick={() => navigate("/budgets", {})}>Go back</button>
      <div className="list">
        <Table columns={columns} data={expenseList} />
      </div>
    </div>
  );
};

export default ExpenseList;
