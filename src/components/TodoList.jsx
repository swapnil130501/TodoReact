import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import TodoContext from '../context/TodoContext';

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <ul>
            {todos?.map((todo) => (
                <TodoListItem 
                    key={todo.value} 
                    todo={todo} 
                />
            ))}
        </ul>
    );
};

export default TodoList;
