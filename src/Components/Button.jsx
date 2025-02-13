import React from 'react'
import '../Style/Button.css'
const Button = ({ value, onClick }) => {
    return (
        <div>
            <button className='btn' onClick={onClick}>
                {value}
            </button>
        </div>
    )
}

export default Button