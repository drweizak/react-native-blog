import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const postsReducer = (state, action) => {
    switch (action.type) {
        case 'get_posts':
            return action.payload;
        case 'add':
            return [...state, action.payload];
        case 'edit':
            let oldPost = state.find(post => post.id === action.payload.id);
            let editedPost = {
                ...oldPost,
                title: action.payload.title,
                content: action.payload.content
            };
            return state.map(post => (post.id === editedPost.id) ? editedPost : post);
        case 'delete':
            return state.filter(post => post.id !== action.payload.id);
        default: return state;
    }
}

const getPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');
        dispatch({ type: 'get_posts', payload: response.data });
    }
}

const addPost = (dispatch) => {
    return async (title, content, callback) => {
        const response = await jsonServer.post('/blogPosts', { title, content });
        dispatch({ type: 'add', payload: response.data });
        if (callback) {
            callback();
        }
    }
}

const editPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogPosts/${id}`, { title, content });
        dispatch({ type: 'edit', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    }
}

const deletePost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({ type: 'delete', payload: { id } });
    }
}

export const { Context, Provider } = createDataContext(postsReducer, { getPosts, addPost, editPost, deletePost }, []);