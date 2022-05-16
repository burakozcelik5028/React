import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  //const isLogin = useSelector(state => state.isLogin);
  const [counterPageFlag, setCounterPageFlag] = useState(false);

  const onCounterHandler = () => {
    setCounterPageFlag(!counterPageFlag);
  }

  return (
    <div className="App">
      {counterPageFlag ? 
        <Counter 
          counterPageFlag={counterPageFlag} 
          setCounterPageFlag={counterPageFlag => setCounterPageFlag(counterPageFlag)}
        />  
        : 
        <button onClick={onCounterHandler}>Counter Redux Persister Example</button>
      }
      
    </div>
  );
}

export default App;
