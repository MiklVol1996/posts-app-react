import React, { useState } from 'react';
import classes from './addPostModule.module.css';
import Button from '../../UI/button/Button';

const AddPostModule = ({reducer}) => {

    let [nameinputValue, setNameInputValue] = useState('');
    let [bodyinputValue, setBodyInputValue] = useState('');

    function onButClick() {
        reducer({type: 'ADD_POST', 
        value: { id: Date.now(), title: nameinputValue, body: bodyinputValue }});
        setNameInputValue('');
        setBodyInputValue('');
    }

    return (
        <div className={classes.wrap}>
            <div>
                <input placeholder='Enter post name...' value={nameinputValue} 
                onChange={e => setNameInputValue(e.target.value)}/>
            </div>
            <div>
                <input placeholder='Enter post body...' value={bodyinputValue} 
                onChange={e => setBodyInputValue(e.target.value)}/>
            </div>
            <Button onClick={onButClick}> Add Post</Button>
        </div>
    )
}

export default AddPostModule;