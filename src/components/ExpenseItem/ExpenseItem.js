import { useState } from 'react';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  const [finalTitle, setFinalTitle] = useState(title);

  const clickHandler = () => {
    setFinalTitle('updated');
    console.log('hahah');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className='="expense-item__description'>
        <h2>{finalTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button type="button" onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
