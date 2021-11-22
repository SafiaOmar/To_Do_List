import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if(!todo.text || /^\$*$/.test(todo.test)){
            return
        }
        const newTodos = [todo, ...todos]
        
        setTodos(newTodos)
        console.log(...todos);
        }

    return (
        <div>
            <h1> whats the plan for today </h1>
            <TodoForm />
        </div>
    );
}

export default TodoList
