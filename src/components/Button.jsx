import React, { memo } from 'react'

function Button({text, onClickHandler, type}) {
    return (
        <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 m-2'
            onClick={onClickHandler} 
            type={type}>

            {text}
        </button>
    )
}

export default memo(Button)