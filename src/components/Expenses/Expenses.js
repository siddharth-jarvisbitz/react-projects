import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFliter from "./ExpensesFliter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFliter
          filteredYear={filteredYear}
          onChangeFilter={getSelectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses = {filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
