var AppDispatcher = require('./../dispatcher/dispatcher');

export function receivePosts(posts) {
    AppDispatcher.dispatch({
        actionType: 'RECEIVED_POSTS',
        posts: posts
    });
}

export function insertComments(comments) {
    AppDispatcher.dispatch({
        actionType: 'COMMENTS_RECEIVED',
        comments: comments
    });
}

export function userReceived(user) {
    AppDispatcher.dispatch({
        actionType: 'USER_RECEIVED',
        comments: user
    });
}

export function receiveUserPage(userPage) {
    AppDispatcher.dispatch({
        actionType: 'USER_PAGE_RECEIVED',
        userPage: userPage
    });
}
