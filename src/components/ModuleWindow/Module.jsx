import React from 'react';
import classes from './Module.module.css'

let Module = ({ isActive, children, setIsActive }) => {
    return (
        <div onClick={setIsActive} className={isActive? [classes.modale_wrap, classes.active].join(' ') : classes.modale_wrap}>
            <div className={classes.modale_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Module;