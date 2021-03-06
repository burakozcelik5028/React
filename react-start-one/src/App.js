import Expenses from "./components/Expenses/Expenses";
import BirthdayCountDown from "./components/ForBirthday/BirthdayCountDown";

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

  //<h2>Let's get started!</h2>
  //<Expenses items={expenses}/>
  return (
    <div>
      <BirthdayCountDown/>      
    </div>
  );
}

export default App;
