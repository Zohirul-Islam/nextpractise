"use client"
import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-3xl font-blod my-5'>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;