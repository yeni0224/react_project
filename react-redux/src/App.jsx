import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './counterSlice';
import Btn from './components/Btn.jsx'
import H1size from './components/H1size.jsx'

function App() {
//useSelector()
const count = useSelector((state)=>(state.counter.value));//store에서 저장된 상태값을 꺼내오는 법
const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment)}> 증가</button>
      <button onClick={()=>dispatch(decrement)}> 감소</button>
      <hr />
      <H1size/><Btn/>
    </div>
  )
}

export default App

