var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedStore = new Store(AppDispatcher);
var _posts = [];
var CHANGE_EVENT = 'CHANGE';

FeedStore.getPosts = function() {
    return _posts.slice();
};

FeedStore.resetPosts = function(posts) {
    _posts = posts;
};

FeedStore.insertComments = function(comment){
  for (var i = 0; i < _posts.length; i++){
    if (_posts[i].id == comment.post_id){
      _posts[i].comments = comment.comments;
    }
  }
};

FeedStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case "RECEIVED_POSTS":
      FeedStore.resetPosts(payload.posts);
      FeedStore.__emitChange();
      break;
    case "COMMENTS_RECEIVED":
      FeedStore.insertComments(payload.comments);
      FeedStore.__emitChange();
      break;
  }
};





export default FeedStore;
