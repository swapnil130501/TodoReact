import { useCallback, useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([ ]);

    const deleteTodoById = useCallback((value) => {
        const newTodos = todos.filter(todo => todo.value !== value);
        console.log(newTodos);
        setTodos(newTodos);
    }, [todos]);

    const onTodoFormSubmit = useCallback((value) => {
        if (value) {
            setTodos([...todos, { value }]);
        }
    }, [todos]);

    return (
        <>
            <TodoInput onSubmit={onTodoFormSubmit}></TodoInput>
            <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoById}></TodoList>
        </>
    )
}

export default App
