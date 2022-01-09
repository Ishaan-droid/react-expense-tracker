import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((cur) => {
        return (
          <ExpenseItem
            key={cur.id}
            date={cur.date}
            amount={cur.amount}
            title={cur.title}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
