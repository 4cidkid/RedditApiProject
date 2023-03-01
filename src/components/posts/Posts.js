import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts } from '../../features/posts/PostsSlice'
import { asyncPosts } from '../../features/posts/PostsSlice'
export function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    useEffect(() => {
        dispatch(asyncPosts());
    },[])
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.link}>
                        <span>{post.title}</span>
                        <span>{post.upVotes}</span>
                        <span>{post.downVotes}</span>
                        <a href={post.link} target="_blank"><img src={post.imgUrl} alt={post.title} /></a>
                        <span>{post.subRedditPrefix}</span>
                        <span>{post.author}</span>
                        </div>
                )})}
        </div>
    )
}