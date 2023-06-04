import React from 'react';
import classes from './FilterPosts.module.css';

let FilterPosts = ({onChange}) => {
  return (
      <div className={classes.filterPosts}>
        <select  onChange={(e)=>onChange(e.target.value)}>
        <option disabled selected >Filter by...</option>
        <option value='title'>By name</option>
        <option value='body'>By content</option>
        <option value='id'>By order</option>
      </select>
      </div>
  )
}

export default FilterPosts;