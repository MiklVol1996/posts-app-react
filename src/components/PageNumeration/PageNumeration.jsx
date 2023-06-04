import React from 'react';
import classes from './pageNumeration.module.css';
import { GetArrOfPages } from '../../hooks/pagination';

const PageNumeration = ({currentPage, reducer, pagesCount}) => {

  function getClassName(page){
    return page === currentPage ? classes.active : classes.page_item;
  }
    
  function onPageClick(p){
    reducer({type: 'SET_CURRENT_PAGE', value: p});
    reducer({type: 'FETCH_POSTS', value: p});
  }

  let arrOfPages = GetArrOfPages(pagesCount);

  return (
    <div className={classes.pages}>
    {arrOfPages.map(p => <span key={p} className={getClassName(p)} 
    onClick={() => onPageClick(p)}>{p}</span>)
    }
  </div>
  )
}

export default PageNumeration;

