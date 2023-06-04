import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '../../UI/button/Button';
import classes from './posts.module.css';

const Posts = ({posts, reducer}) => {

    if (!posts.length) {
        return (
            <h1 className={classes.notFound}>
                Posts are not found
            </h1>
        )
    }
    return (
        <div>
            <div className={classes.title}>
                Posts
            </div>
            <div>
                <TransitionGroup>
                {posts.map((post) => {
                    return (
                        <CSSTransition key={post.id} timeout={500} classNames='post'>
                        <div className={classes.wrap}>
                            <div>
                                <div className={classes.description}>{`${post.id} ${post.title}`}</div>
                                <div className={classes.body}>{post.body}</div>
                            </div>
                            <Button onClick={() => reducer({type: 'DELETE_POST', value: post.id})}>Delete</Button>
                        </div>
                        </CSSTransition>
                    )
                })}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default Posts;