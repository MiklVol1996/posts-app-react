import React from 'react';
import classes from './Button.module.css';

let Button = ({ children, onClick }) => {
    return (
        <div className={classes.myButton}>
           
                <button onClick={onClick}>
                    {children}
                </button>
            

        </div>

    )
}

export default Button;