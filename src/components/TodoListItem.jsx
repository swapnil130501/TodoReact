import React, { memo, useCallback } from 'react'
import Button from './Button';

function TodoListItem( {todo, onDelete} ) {

    const onClickHandler = useCallback(() => {
        onDelete(todo.value);
    }, [todo]); 

    return (
        <li>
            {todo.value}
            <Button
                text = "X"
                onClickHandler={onClickHandler}
            >
            </Button>
        </li>
    )
}

export default memo(TodoListItem);