import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { id: Math.random(), value: 0, label: 'jan' },
    { id: Math.random(), value: 0, label: 'feb' },
    { id: Math.random(), value: 0, label: 'mar' },
    { id: Math.random(), value: 0, label: 'apr' },
    { id: Math.random(), value: 0, label: 'may' },
    { id: Math.random(), value: 0, label: 'jun' },
    { id: Math.random(), value: 0, label: 'july' },
    { id: Math.random(), value: 0, label: 'aug' },
    { id: Math.random(), value: 0, label: 'sep' },
    { id: Math.random(), value: 0, label: 'oct' },
    { id: Math.random(), value: 0, label: 'nov' },
    { id: Math.random(), value: 0, label: 'dec' },
  ];

  expenses.forEach(({ date, amount }) => {
    const expenseMonth = date.getMonth();
    chartDataPoints[expenseMonth].value += amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
