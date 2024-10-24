import React, { memo, useContext, useState, useCallback } from 'react';
import Button from './Button';
import TodoContext from '../context/TodoContext';

function TodoListItem({ todo }) {
    const { dispatch } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newTodoValue, setNewTodoValue] = useState(todo.value);

    const onClickDeleteHandler = useCallback(() => {
        dispatch({ type: 'DELETE_TODO', payload: todo.value });
    }, [dispatch, todo.value]);

    const onClickUpdateHandler = useCallback(() => {
        dispatch({ type: 'UPDATE_TODO', payload: { oldValue: todo.value, newValue: newTodoValue } });
        setIsEditing(false);
    }, [dispatch, todo.value, newTodoValue]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    return (
        <li className="flex justify-between items-center p-4 bg-white shadow-md rounded-md mb-3">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTodoValue}
                        onChange={handleChange}
                        className="border p-2 rounded-md"
                    />
                    <Button text="Update" onClickHandler={onClickUpdateHandler} />
                </>
            ) : (
                <>
                    <span className="text-lg">{todo.value}</span>
                    <Button text="Edit" onClickHandler={handleEditClick} />
                </>
            )}
            <Button text="Delete" onClickHandler={onClickDeleteHandler} />
        </li>
    );
}

export default memo(TodoListItem);
