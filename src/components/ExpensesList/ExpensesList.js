import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
  if (items?.length === 0) return <h2 className="expenses-list__fallback">Found No Expenses</h2>;

  return (
    <ul className="expenses-list">
      { items.map((expense, index) => (
        <ExpenseItem
          key={expense.id ?? index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
