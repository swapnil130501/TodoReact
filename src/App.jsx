import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContext from './context/TodoContext';

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <>  
            <TodoContext.Provider value={{ todos, setTodos }}>
                <TodoInput />
                <TodoList />
            </TodoContext.Provider>
        </>
    );
}

export default App;
