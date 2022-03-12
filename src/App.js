import './App.css';
import User from './User';
import Counter from './Counter';

const USERS = [
  {
    firstName: 'Andrei',
    lastName: 'Pop'
  },
  {
    firstName: 'George',
    lastName: 'Ion'
  }
]


function App() {
  return (
    <div>
      <h1>Title</h1>
      {
        USERS.map((user, index) => {
          return (
            <User key={index} firstName={user.firstName} lastName={user.lastName}></User>
          )
        })
      }
      <Counter name='My first counter!' startingValue={100} step={10}></Counter>
      <Counter name='My second counter!' shouldNotHaveDecrement></Counter>
    </div>
  );
}

export default App;
