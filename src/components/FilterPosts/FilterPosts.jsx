import React from 'react';
import classes from './filterPosts.module.css';

const FilterPosts = ({reducer}) => {

  let selectData = [
    {content: 'By name', value: 'title'},
    {content: 'By content', value: 'body'},
    {content: 'By order', value: 'id'},
  ]

  return (
      <div className={classes.filterPosts}>
        <select  onChange = {e => reducer({type: 'CHANGE_FILTER', value: e.target.value})}>
        <option disabled selected >Filter by...</option>
        {
          selectData.map(el => <option value = {el.value}>{el.content}</option>)
        }
      </select>
      </div>
  )
}

export default FilterPosts;