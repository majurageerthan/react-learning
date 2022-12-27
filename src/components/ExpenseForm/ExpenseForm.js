import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event?.target?.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event?.target?.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event?.target?.value);
  };

  const submitHandler = (event) => {
    event?.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="a">
            Title
            <input
              type="text"
              id="a"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="aa">
            Amount
            <input
              type="number"
              min="0.01"
              step="0.01"
              id="aa"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="aaa">
            Date
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              id="aaa"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </label>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>

      </div>
    </form>
  );
};

export default ExpenseForm;
