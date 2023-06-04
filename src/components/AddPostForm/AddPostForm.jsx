import React, { useState } from 'react';
import classes from './AddPostForm.module.css';
import Button from './../../UI/Button/Button';

let AddPostForm = ({ addPost }) => {

    let [NameinputValue, setNameInputValue] = useState('');
    let [BodyinputValue, setBodyInputValue] = useState('');

    return (
        <div className={classes.wrap}>
            <div>
                <input placeholder='Enter post name...' value={NameinputValue} onChange={(e) => { setNameInputValue(e.target.value); }} />
            </div>
            <div>
                <input placeholder='Enter post body...' value={BodyinputValue} onChange={(e) => setBodyInputValue(e.target.value)} />
            </div>
            <Button onClick={()=>{
                addPost({ id: Date.now(), title: NameinputValue, body: BodyinputValue });
                setNameInputValue('');
                setBodyInputValue('');
            }}> Add Post</Button>
        </div>
    )
}

export default AddPostForm;