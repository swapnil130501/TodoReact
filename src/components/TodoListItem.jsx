import React from 'react'
import Button from './Button';

function TodoListItem( {todo, onDelete} ) {
  return (
        <li>
            {todo.value}
            <Button
                text = "X"
                onClickHandler={() => onDelete(todo.value)}
            >
            </Button>
        </li>
  )
}

export default TodoListItem;