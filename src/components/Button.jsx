import React, { memo } from 'react'

function Button({text, onClickHandler, type}) {
    return (
        <button 
            onClick={onClickHandler} 
            type={type}>

            {text}
        </button>
    )
}

export default memo(Button)