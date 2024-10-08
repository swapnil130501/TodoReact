import React, { useState } from 'react'
import Button from './Button';

function TodoInput({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit?.(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new todo"
            />
            <Button
                type="submit"
                text="add"
            >
            </Button>
        </form>
      );
}

export default TodoInput