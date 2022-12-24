import './ExpenseForm.css';

const ExpenseForm = () => (
  <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="a">
          Title
          <input type="text" id="a" />
        </label>
      </div>
      <div className="new-expense__control">
        <label htmlFor="aa">
          Amount
          <input type="number" min="0.01" step="0.01" id="aa" />
        </label>
      </div>
      <div className="new-expense__control">
        <label htmlFor="aaa">
          Title
          <input type="date" min="2019-01-01" max="2022-12-31" id="aaa" />
        </label>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>

    </div>
  </form>
);

export default ExpenseForm;
