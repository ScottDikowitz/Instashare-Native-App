var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserPageStore = new Store(AppDispatcher);

var _userPage = {};

UserPageStore.getPage = function() {
    return _userPage;
};

UserPageStore.resetUserPage = function(userPage) {
    _userPage = userPage;
};

UserPageStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case "USER_PAGE_RECEIVED":
      UserPageStore.resetUserPage(payload.userPage);
      UserPageStore.__emitChange();
      break;
  }
};

export default UserPageStore;
