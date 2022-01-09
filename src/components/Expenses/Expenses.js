import React, { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState();

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
          title={props.expenses[0].title}
        />
        <ExpenseItem
          date={props.expenses[1].date}
          amount={props.expenses[1].amount}
          title={props.expenses[1].title}
        />
        <ExpenseItem
          date={props.expenses[2].date}
          amount={props.expenses[2].amount}
          title={props.expenses[2].title}
        />
        <ExpenseItem
          date={props.expenses[3].date}
          amount={props.expenses[3].amount}
          title={props.expenses[3].title}
        />
      </Card>
    </div>
  );
}

export default Expenses;
