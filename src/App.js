import { useEffect, useState } from 'react';
import './App.css';
import AddPostForm from './components/AddPostForm/AddPostForm';
import Module from './components/ModuleWindow/Module';
import Posts from './components/Posts/Posts';
import SettingsComponent from './components/SettingsComponent/SettingsComponent';
import { usePosts } from './hooks/FilterSearch';
import PostService from './API/PostService';
import Loader from './UI/Loader/Loader';
import { GetPages } from './hooks/pagination';
import PageNumeration from './components/PageNumeration/PageNumeration';

function App() {

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

  return (
    <div className='wrap'>
      <div>

        <Module setIsActive={() => setIsModaleActive(false)} isActive={isModaleActive}>
          <AddPostForm addPost={(post) => { setPosts([...posts, post]); setIsModaleActive(false); }} />
        </Module>

        <SettingsComponent addPost={(post) => setPosts([...posts, post])}
          onChangeFilter={(typeSort) => setFilter({ ...filter, filter: typeSort })}
          searchInputValue={filter.search} onChangeSearch={(word) => setFilter({ ...filter, search: word })} 
          setCurrentPage={()=>setCurrentPage(1)} fetchPosts={()=>fetchPosts(1)} deleteAllPosts={deleteAllPosts}
          setPagesCount={()=>setPagesCount(0)} setIsModaleActive={()=>setIsModaleActive(true)}/>
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
          <Posts posts={filteredSearchedPosts} deletePost={(id) => deletePost(id)} />
          <PageNumeration currentPage={currentPage} pagesCount={pagesCount}
            setCurrentPage={(page) => setCurrentPage(page)} fetchPosts={(page) => fetchPosts(page)} />
        </div>
      }
    </div>
  )


}
export default App;


