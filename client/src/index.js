import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BudgetList from "budgets/BudgetList";
import BudgetForm from "budgets/BudgetForm";
import CSV from "budgets/CSV";
import EditBudget from "budgets/editBudget";
import ExpenseList from "Expenses/ExpenseList";
import IncomeList from "Incomes/IncomeList";
import Login from "components/login";
import "Shared/style.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Budget Planner</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Login key={"login"} />} exact />
            <Route
              path="budgets"
              element={[
                <BudgetForm key={"budgetForm"} />,
                <BudgetList key={"budgetList"} />,
                <CSV key={"CSV"} />,
              ]}
              exact
            />
            <Route
              path="editBudget"
              element={<EditBudget key={"editBudget"} />}
              exact
            />
            <Route
              path="expenses"
              element={<ExpenseList key={"expenseList"} />}
              exact
            />
            <Route
              path="incomes"
              element={<IncomeList key={"incomeList"} />}
              exact
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
