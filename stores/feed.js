var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedStore = new Store(AppDispatcher);
var _posts = [];
var CHANGE_EVENT = 'CHANGE';

FeedStore.getPosts = function() {
    return _posts.slice();
}

// FeedStore.addChangeListener = function(callback){
//     debugger;
//   this.on(CHANGE_EVENT, callback);
// };
//
// FeedStore.removeChangeListener = function(callback){
//   this.removeListener(CHANGE_EVENT, callback);
// };

FeedStore.resetPosts = function(posts) {
    _posts = posts;
};

FeedStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case "RECEIVED_POSTS":
      FeedStore.resetPosts(payload.posts);
      FeedStore.__emitChange();
      break;
  }
};





export default FeedStore;
