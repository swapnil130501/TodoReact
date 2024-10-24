import React, { memo, useContext, useState, useCallback } from 'react';
import Button from './Button';
import TodoContext from '../context/TodoContext';

function TodoListItem({ todo }) {
    const { todos, setTodos } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newTodoValue, setNewTodoValue] = useState(todo.value);

    const onClickDeleteHandler = useCallback(() => {
        const newTodos = todos.filter(t => t.value !== todo.value);
        setTodos(newTodos);
    }, [todos, setTodos, todo.value]);

    const onClickUpdateHandler = useCallback(() => {
        const newTodos = todos.map(t => {
            if (t.value === todo.value) {
                return { value: newTodoValue };
            }
            return t;
        });
        setTodos(newTodos);
        setIsEditing(false);
    }, [todos, setTodos, todo.value, newTodoValue]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTodoValue}
                        onChange={handleChange}
                    />
                    <Button text="Update" onClickHandler={onClickUpdateHandler} />
                </>
            ) : (
                <>
                    {todo.value}
                    <Button text="Edit" onClickHandler={handleEditClick} />
                </>
            )}
            <Button text="Delete" onClickHandler={onClickDeleteHandler} />
        </li>
    );
}

export default memo(TodoListItem);
