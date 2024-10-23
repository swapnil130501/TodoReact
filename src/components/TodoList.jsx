import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ listOfTodos, onDeleteTodo, onUpdateTodo}) => {

    return (
        <ul>
            {listOfTodos?.map((todo) => {
                return <TodoListItem 
                    key={todo.value} 
                    todo={todo} 
                    onDelete={onDeleteTodo} 
                    onUpdate={onUpdateTodo}/>
                })}
        </ul>
    );
};

export default TodoList;
