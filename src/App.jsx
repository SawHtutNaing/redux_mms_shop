
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './features/counter';


function App() {
  const count  =useSelector(state =>state.count)
  const dispatch = useDispatch();
  return (
<div>
<h1>
{count}
</h1>
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button>
</div>
  );
}

export default App;
