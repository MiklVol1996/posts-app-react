import React from 'react';
import classes from './module.module.css'

const Module = ({ isActive, children, reducer }) => {

    function getActiveClasses(){
        return isActive
        ? [classes.modale_wrap, classes.active].join(' ') 
        : classes.modale_wrap;
    }
    
    return (
        <div onClick={() => reducer({type: 'SET_IS_MODALE_ACTIVE', value: false})} 
        className={getActiveClasses()}>
            <div className={classes.modale_content} 
            onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Module;