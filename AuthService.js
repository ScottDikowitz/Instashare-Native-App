var React = require('react-native');
var AsyncStorage = require('react-native').AsyncStorage;

class AuthService {
    constructor() {
        this._cookie = [];
    }
    login(credentials, cb){
        var that = this;
        fetch('http://www.instashare.scottdikowitz.com/api/session', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password
          })
        }).then((response)=>{
            if(response.status >= 200 && response.status < 300){
                return response;
            }
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            }
        }).then((response)=>{
            // AsyncStorage.multiSet([
            //     ['session', response.headers.map['set-cookie'][0].split('; path=/;')[0]]
            // ], (error)=>{
            //     if (error){
            //         throw error;
            //     }
            // });
            this._cookie = ['session', response.headers.map['set-cookie'][0].split('; path=/;')[0]];
            return response.json();
        }).then((results)=>{
            return cb(that._cookie, {id: results.id, username: results.username});
        }).catch((error)=>{
            return cb(error);
        }).finally(()=>{

        });
    }

    fetchUser(cb){


        AsyncStorage.multiGet(['session'], (err, val)=>{
            if(err){
                return cb(er)
            }

            if (!val){
                return cb();
            }
            this._cookie = val[0][1];
        });
        fetch('http://www.instashare.scottdikowitz.com/api/session', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

          },
        }).then((response)=>{
            if(response.status >= 200 && response.status < 300){
                return response;
            }
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            }
        }).then((response)=>{
            // AsyncStorage.multiSet([
            //     ['session', response.headers.map['set-cookie'][0].split('; path=/;')[0]]
            // ], (error)=>{
            //     if (error){
            //         throw error;
            //     }
            // });

            return response.json();
        }).then((results)=>{
            return cb(results);
        }).catch((error)=>{
            return cb(error);
        }).finally(()=>{

        });
    }
}



module.exports = new AuthService();
