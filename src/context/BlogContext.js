import React, { useState, useReducer } from 'react';
import postsReducer from '../hooks/postsReducer';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [posts, dispatch] = useReducer(postsReducer, []);

    const addPost = () => {
        dispatch({type: 'add'});
    }

    return <BlogContext.Provider value={{data: posts, addPost: addPost}}>{children}</BlogContext.Provider>;
}

export default BlogContext;