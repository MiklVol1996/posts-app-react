import React from 'react';
import Button from '../../UI/Button/Button';
import FilterPosts from '../FilterPosts/FilterPosts';
import SearchPosts from '../SearchPosts/SearchPosts';

let SettingsComponent = ({ onChangeFilter, searchInputValue, onChangeSearch, 
    setCurrentPage, fetchPosts, deleteAllPosts, setPagesCount, setIsModaleActive }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Button onClick={() => setIsModaleActive(true)}>Create new post</Button>
                <FilterPosts onChange={(typeSort) => { onChangeFilter(typeSort) }} />
                <SearchPosts onChange={(word) => onChangeSearch(word)} 
                searchInputValue={searchInputValue} />
            </div>
            <div>
                <div style={{marginBottom:30}}>
                <Button onClick={() => {
                    setCurrentPage(1);
                    fetchPosts(1);
                }}>Get Posts!</Button>
                </div>
               <Button onClick={() => {
                    deleteAllPosts();
                    setPagesCount(0);
                }}>Delete all</Button>
            </div>
        </div>
    )
}
export default SettingsComponent;