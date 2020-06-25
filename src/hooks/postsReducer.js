const postsReducer = (state, action) => {
    switch(action.type) {
        case 'add':
            const newPost = { title: `Blog Post #${state.length + 1}` };
            return [...state, newPost];
        case 'edit': return state;
        case 'delete': return state;
        default: return state;
    }
}

export default postsReducer;