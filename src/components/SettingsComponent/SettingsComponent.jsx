import React from 'react';
import Button from '../../UI/button/Button';
import FilterPosts from '../filterPosts/FilterPosts';
import SearchPosts from '../searchPosts/SearchPosts';

const SettingsComponent = ({reducer, searchInputValue}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Button onClick={() => reducer({type: 'SET_IS_MODALE_ACTIVE', value: true})}>Create new post</Button>
                <FilterPosts reducer={reducer}/>
                <SearchPosts reducer={reducer} searchInputValue={searchInputValue}/>
            </div>
            <div>
                <div style={{marginBottom:30}}>
                <Button onClick={() => {
                    reducer({type: 'SET_CURRENT_PAGE', value: 1});
                    reducer({type: 'FETCH_POSTS', value: 1});
                }}>Get Posts!</Button>
                </div>
               <Button onClick={() => {
                    reducer({type: 'DELETE_ALL_POSTS'});
                    reducer({type: 'SET_PAGES_COUNT', value: 0});
                }}>Delete all</Button>
            </div>
        </div>
    )
}

export default SettingsComponent;