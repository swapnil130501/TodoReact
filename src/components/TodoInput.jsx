import React, { useState, useContext } from 'react';
import Button from './Button';
import TodoContext from '../context/TodoContext';

function TodoInput() {
    const [inputValue, setInputValue] = useState('');
    const { dispatch } = useContext(TodoContext);

    function handleSubmit() {
        dispatch({ type: 'ADD_TODO', payload: inputValue });
        setInputValue('');
    }

    return (
        <div className="flex justify-center mb-6">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a todo"
                className="border border-gray-300 p-2 rounded-md w-full max-w-md"
            />
            <Button text="Add" onClickHandler={handleSubmit} type="submit" />
        </div>
    );
}

export default React.memo(TodoInput);
