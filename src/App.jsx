import { useCallback, useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import TodoContext from './context/TodoContext';

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

    const updateTodo = useCallback((oldValue, newValue) => {
        const newTodos = todos.map(todo => {
            if (todo.value === oldValue) {
                return { value: newValue };
            }

            return todo;
        });
        setTodos(newTodos);
    }, [todos]);

    return (
        <>  
            <TodoContext.Provider value={{todos, setTodos}}>
                <TodoInput></TodoInput>
                <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoById} onUpdateTodo={updateTodo}></TodoList>
            </TodoContext.Provider>
        </>
    )
}

export default App
