import {increment, decrement, makeZero} from '../Redux/Actions/index'
import { useDispatch, useSelector } from 'react-redux';

import '../App.css';

function Counter(props){
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncreaseButtonHandler = () => {dispatch(increment(5))}
  const onDecreaseButtonHandler = () => {dispatch(decrement())}
  const onZeroButtonHandler = () => {dispatch(makeZero())}
  
  return (
    <div className="App">
      {props.counterPageFlag ? 
        <button onClick={()=>props.setCounterPageFlag(!props.counterPageFlag)}>Home Page</button> 
        : 
        ''
      }
      <h1>Counter: {counter}</h1>
      <button onClick = {onIncreaseButtonHandler}> + </button>
      <button onClick = {onDecreaseButtonHandler}> - </button>
      <div>
        <button onClick = {onZeroButtonHandler}>Reset</button>
      </div>
    </div>
  );
}
// deneme satırı
export default Counter;
