import './Expenses.css';
import { useState } from 'react';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterValueChangeHandler = (filterData) => {
    setFilterYear(filterData);
  };

  const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === Number(filterYear));

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onFilterValueChange={filterValueChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
