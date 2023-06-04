import { useEffect, useState } from 'react';
import './app.css';
import AddPostModule from './components/addPostForm/AddPostModule';
import Module from './components/moduleWindow/Module';
import Posts from './components/posts/Posts';
import SettingsComponent from './components/settingsComponent/SettingsComponent';
import { usePosts } from './hooks/filterSearch';
import PostService from './api/postService';
import Loader from './UI/loader/Loader';
import { GetPages } from './hooks/pagination';
import PageNumeration from './components/pageNumeration/PageNumeration';

const App = () => {

  let [posts, setPosts] = useState([]);
  let [filter, setFilter] = useState({ search: '', filter: '' });
  let [isModaleActive, setIsModaleActive] = useState(false);
  let [isPostsLoading, setIsPostsLoading] = useState(false);
  let [pagesCount, setPagesCount] = useState(0);
  let [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts(page = 1) {

    setIsPostsLoading(true);

    setTimeout(async () => {
      let responce = await PostService.fetchPosts(page);
      let totalCount = responce.headers['x-total-count'];
      let pages = GetPages(totalCount);
      setPagesCount(pages);
      setCurrentPage(page);
      setPosts([...responce.data]);
      setIsPostsLoading(false);
    }, 1000);

  }

  function deletePost(id) {
    setPosts(posts.filter(post => post.id !== id))
  }

  function deleteAllPosts() {
    setPosts([]);
  }

  let filteredSearchedPosts = usePosts(posts, filter.filter, filter.search);

  function reducer(action){
    switch(action.type){
      case 'CHANGE_FILTER': {
        setFilter({...filter, filter : action.value});
        break;
      }
      case 'ON_CHANGE_SEARCH': {
        setFilter({ ...filter, search: action.value });
        break
      }
      case 'SET_CURRENT_PAGE': {
        setCurrentPage(action.value);
        break;
      }
      case 'FETCH_POSTS': {
        fetchPosts(action.value);
        break;
      }
      case 'DELETE_ALL_POSTS': {
        deleteAllPosts();
        break;
      }
      case 'SET_PAGES_COUNT': {
        setPagesCount(action.value);
        break;
      }
      case 'SET_IS_MODALE_ACTIVE': {
        setIsModaleActive(action.value);
        break;
      }
      case 'ADD_POST': {
        setPosts([...posts, action.value]);
        setIsModaleActive(false);
        break;
      }
      case 'DELETE_POST': {
        deletePost(action.value);
        break;
      }
      case 'FETCH_POSTS': {
        fetchPosts(action.value);
        break;
      }
    }
  }

  return (
    <div className='wrap'>
      <div>
        <Module reducer={reducer} isActive={isModaleActive}>
          <AddPostModule reducer={reducer}/>
        </Module>
        <SettingsComponent reducer={reducer} searchInputValue={filter.search}/>
      </div>
      <hr />
      {isPostsLoading
        ?
        <div className='loader'>
          <h1>Posts are being downloaded... Please wait</h1>
          <Loader />
        </div>
        :
        <div>
          <Posts posts={filteredSearchedPosts} reducer={reducer}/>
          <PageNumeration currentPage={currentPage} pagesCount={pagesCount}
            reducer={reducer}/>
        </div>
      }
    </div>
  )
}

export default App;


