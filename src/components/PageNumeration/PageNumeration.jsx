import React from 'react';
import classes from './PageNumeration.module.css';
import { GetArrOfPages } from '../../hooks/pagination';

let PageNumeration = ({currentPage, setCurrentPage, fetchPosts, pagesCount}) => {

  let arrOfPages = GetArrOfPages(pagesCount);

  return (
    <div className={classes.pages}>
    {arrOfPages.map(p => <span key={p} className={p === currentPage ? classes.active : classes.page_item} onClick={() => {
      setCurrentPage(p);
      fetchPosts(p);
    }}>{p}</span>)
    }
  </div>
  )
}

export default PageNumeration;

