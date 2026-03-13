import { useState } from "react";
//Todolist 메인 화면 구성 조립하는 곳
const TodoEditor=()=>{

    const [text, setText] = useState('');
    const [priority, setPriority] = useState('');
    const handleInputText=()=>{

    }


    return(<>
    <h1>To-Do List</h1>
    <input type='text' value={text} placeholder="할 일 입력하세요" onChange={(e)=>setText(e.target.value)}/>&nbsp;&nbsp;
    <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option value="1">🔴 높음</option>
        <option value="2">🟡 중간</option>
        <option value="3">🟢 낮음</option>
    </select>&nbsp;&nbsp;
    <button onClick={handleInputText}>저장</button>
</>)
}
export default TodoEditor