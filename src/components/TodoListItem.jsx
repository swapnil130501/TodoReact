import React, { memo, useContext, useState, useCallback } from 'react';
import Button from './Button';
import TodoContext from '../context/TodoContext';
import useConfirm from '../hooks/useConfirm';

function TodoListItem({ todo }) {
    const { dispatch } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newTodoValue, setNewTodoValue] = useState(todo.value);
    const [confirmDelete, ConfirmModal] = useConfirm();

    const onClickDeleteHandler = useCallback(() => {
        confirmDelete(() => dispatch({ type: 'DELETE_TODO', payload: todo.value }));
    }, [confirmDelete, dispatch, todo.value]);

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
        <>
            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-3">
                {isEditing ? (
                    <div className="flex-grow flex items-center">
                        <input
                            type="text"
                            value={newTodoValue}
                            onChange={handleChange}
                            className="border p-2 rounded-md flex-grow"
                        />
                    </div>
                ) : (
                    <span className="text-lg flex-grow">{todo.value}</span>
                )}
                <div className="flex space-x-2">
                    {isEditing ? (
                        <Button text="Update" onClickHandler={onClickUpdateHandler} />
                    ) : (
                        <Button text="Edit" onClickHandler={handleEditClick} />
                    )}
                    <Button text="Delete" onClickHandler={onClickDeleteHandler} />
                </div>
            </li>
            {ConfirmModal}
        </>
    );
}

export default memo(TodoListItem);
