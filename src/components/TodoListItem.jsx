import React, { memo, useCallback, useState } from 'react'
import Button from './Button';

function TodoListItem( {todo, onDelete, onUpdate} ) {

    const [isEditing, setIsEditing] = useState(false);
    const [newTodoValue, setNewTodoValue] = useState(todo.value);

    const onClickDeleteHandler = useCallback(() => {
        onDelete(todo.value);
    }, [onDelete, todo.value]);

    const onClickUpdateHandler = useCallback(() => {
        onUpdate(todo.value, newTodoValue);
        setIsEditing(false);
    }, [onUpdate, todo.value, newTodoValue]);

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