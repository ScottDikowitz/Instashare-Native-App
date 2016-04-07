var AppDispatcher = require('./../dispatcher/dispatcher');

export function receivePosts(posts) {
    AppDispatcher.dispatch({
        actionType: 'RECEIVED_POSTS',
        posts: posts
    });
}
