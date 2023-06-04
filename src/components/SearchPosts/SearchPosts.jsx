import React from 'react';
import classes from './searchPosts.module.css';

const SearchPosts = ({ reducer, searchInputValue }) => {

    return (
        <div className={classes.wrap}>
            <input onChange={(e) => {
                reducer({type: 'ON_CHANGE_SEARCH', value: e.target.value});
            }} value={searchInputValue} placeholder='Search...'></input>
        </div>
    )
}

export default SearchPosts;