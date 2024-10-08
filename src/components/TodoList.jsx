import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ listOfTodos, onDeleteTodo}) => {

    return (
        <ul>
            {listOfTodos?.map((todo) => {
                return <TodoListItem 
                    key={todo.value} 
                    todo={todo} 
                    onDelete={onDeleteTodo} />
                })}
        </ul>
    );
};

export default TodoList;
