import React from 'react';
import classes from './button.module.css';

const Button = ({ children, onClick }) => {
    return (
        <div className={classes.myButton}>
           <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button;