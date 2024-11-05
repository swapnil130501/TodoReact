import { useReducer } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContext from './context/TodoContext';
import todoReducer from './reducer/todoReducer';
import CustomModal from './components/CustomModal';

function App() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <div className="flex flex-col items-center min-h-screen p-5 bg-gray-100">
            <TodoContext.Provider value={{ todos, dispatch }}>
                <h1 className="text-4xl font-bold mb-6">Todo App</h1>
                <TodoInput />
                <TodoList />
                <CustomModal></CustomModal>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
