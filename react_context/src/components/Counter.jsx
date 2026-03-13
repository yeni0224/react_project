import React, { useReducer } from 'react';
 
// 1. 리듀서 함수 정의 (상태 업데이트 로직)
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 }; //대입 연산을 통해 직접 값을 수정하면 안됨
      //객체의 참조는 그대로이고 내부 값만 바뀌기 때문에 React가 "상태가 바뀌었다"는 걸 감지 못할 것
    default:
      return state;
  }
}
 
export default function Counter() {
  // 2. useReducer 사용 (리듀서 함수와 초기 상태 전달)
  //dispatch 호출되면 액션을 넘겨줌, dispatch가 reducer을 호출
  const [state, dispatch] = useReducer(reducer, { count: 0 });
 
  return (
  <div>
  <p>현재 카운트: {state.count}</p>
      {/* 3. dispatch를 통해 액션 전달 */}
  <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
  <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
  <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
  </div>
  );}