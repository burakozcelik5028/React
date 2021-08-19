import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'BasketBall Ball',
      amount: 34.05,
      date: new Date(2021, 3, 28)
    },
    {
      id: 'e3',
      title: 'Egg',
      amount: 12.21,
      date: new Date(2020, 5, 23)
    },
    {
      id: 'e4',
      title: 'Plane Ticket',
      amount: 123.43,
      date: new Date(2020, 7, 19)
    },

  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>

      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />

      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>

      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
