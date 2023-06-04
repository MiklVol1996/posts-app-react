import React, { useState } from 'react';
import classes from './SearchPosts.module.css';

let SearchPosts = ({ onChange, searchInputValue }) => {

    return (
        <div className={classes.wrap}>
            <input onChange={(e) => {
                onChange(e.target.value);
            }} value={searchInputValue} placeholder='Search...'></input>
        </div>
    )
}

export default SearchPosts;