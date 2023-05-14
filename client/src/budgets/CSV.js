import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import "Shared/style.css";

const CSV = () => {
  const csvLinkEl = React.createRef();
  const headers = [
    { label: "name", key: "name" },
    { label: "balance", key: "balance" },
    { label: "budgetLimit", key: "budgetLimit" },
    { label: "date", key: "date" },
    { label: "note", key: "note" },
    { label: "userId", key: "userId" },
  ];

  const [budgetList, setBudgetList] = useState([]);

  useEffect(() => {
    const getRequestUrl = "http://localhost:3001/api/get";
    Axios.get(getRequestUrl).then((response) => {
      setBudgetList(response.data);
    });
  }, []);

  const data = [];

  budgetList.map((budget) => {
    var obj = {};
    obj["name"] = budget.name;
    obj["balance"] = budget.balance;
    obj["budgetLimit"] = budget.budgetLimit;
    obj["date"] = budget.date;
    obj["note"] = budget.note;
    obj["userId"] = budget.userId;
    data.push(obj);
  });

  const downloadReport = async () => {
    setTimeout(() => {
      csvLinkEl.current.link.click();
    });
  };

  return (
    <div>
      <button className="action" onClick={(e) => downloadReport()}>
        Download Budget
      </button>
      <CSVLink
        headers={headers}
        filename="budgets.csv"
        data={data}
        ref={csvLinkEl}
      />
    </div>
  );
};

export default CSV;
