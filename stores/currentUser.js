var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserStore = new Store(AppDispatcher);
var AsyncStorage = require('react-native').AsyncStorage;

var _user = {};

CurrentUserStore.getCurrentUser = function() {
    return _user;
};

CurrentUserStore.checkUser = function() {
    AsyncStorage.multiGet([
        'user'
    ]).then((user) => {
        const userObj = JSON.parse(user[0][1]);

        AppDispatcher.dispatch({
            actionType: 'USER_RECEIVED',
            user: userObj
        });
    });
};

CurrentUserStore.resetUser = function(user) {
    _user = user;
};

CurrentUserStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case "USER_RECEIVED":
      CurrentUserStore.resetUser(payload.user);
      CurrentUserStore.__emitChange();
      break;
  }
};





export default CurrentUserStore;
