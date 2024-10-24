import React, { useState, useContext } from 'react';
import Button from './Button';
import TodoContext from '../context/TodoContext';

function TodoInput() {
    const [inputValue, setInputValue] = useState('');
    const { todos, setTodos } = useContext(TodoContext);

    function handleSubmit() {
        setTodos([...todos, { value: inputValue }]);
        setInputValue('');
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a todo"
                className="border border-gray-300 p-2 rounded-md w-full max-w-md m-2"
            />
            <Button text="Add" onClickHandler={handleSubmit} type="submit" />
        </div>
    );
}

export default React.memo(TodoInput);
