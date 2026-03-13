import {useState} from 'react'
const TodoList=()=>{

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo=(e)=>{
        setTodo(e.target.value);
    }
    const handleInputTodo=()=>{
        if(!todo) return;
        setTodos([...todos, todo]);
        setTodo('');
    }
    const handleDeleteTodo=(index)=>{
        const newTodos = todos.filter((_,i)=> i !== index);
        setTodos(newTodos);
    }
    return(<div>
    <h1>To-Do List</h1>
    <input type='text' value={todo} placeholder='Add a new task'
    onChange={handleAddTodo}/>
    <button onClick={handleInputTodo}>Add</button>
    <ul type='None'>
        {todos.map((t, index)=>(<li key={index}>{t}
        <button onClick={()=>handleDeleteTodo(index)}>Delete</button></li>))}
    </ul>

    </div>
    );
}
export default TodoList