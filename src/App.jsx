import { useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([ ]);

    function deleteTodoById(value) {
        const newTodos = todos.filter(todo => todo.value !== value);
        console.log(newTodos);
        setTodos(newTodos);
    }

    function onTodoFormSubmit(value) {
        if(value) {
        setTodos([...todos, {value}]);
        }   
    }

    return (
        <>
            <TodoInput onSubmit={onTodoFormSubmit}></TodoInput>
            <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoById}></TodoList>
        </>
    )
}

export default App
