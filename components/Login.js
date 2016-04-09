'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  AsyncStorage,
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} = React;

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            username: "",
            password: "",
            error: false
        };
    }

    _onPress() {
        this.setState({loading: true});
        var authService = require('./../AuthService');
        authService.login({
            username: this.state.username,
            password: this.state.password
        }, (cookie, user)=>{
            if (!(typeof cookie.badCredentials === "undefined")){
                this.setState(cookie);
                this.setState({loading: false});
            }
            else {
                AsyncStorage.multiSet([
                    cookie, ['user', JSON.stringify(user)]
                ], (error)=>{
                    if (error){
                        throw error;
                    }
                });
                this.props.onLogin();
            }
        });
    }

    onChangeUname(e) {
        this.setState({username: e.nativeEvent.text});
    }

    onChangePassword(e) {
        this.setState({password: e.nativeEvent.text});
    }

    render(){

        var errorCtrl = <View />;
        if (this.state.badCredentials){
            errorCtrl = <Text style={styles.error}>
                That username and password combination did not work.
            </Text>;
        }
        if (this.state.unknownError){
            errorCtrl = <Text style={styles.error}>
                We experienced an unexpected issue.
            </Text>;
        }

        return (
            <View style={styles.container}>
                <ActivityIndicatorIOS animating={this.state.loading}/>
                <TextInput onChange={this.onChangeUname.bind(this)} style={styles.textField}></TextInput>
                <TextInput onChange={this.onChangePassword.bind(this)} style={styles.textField} secureTextEntry={true}></TextInput>
                <TouchableHighlight onPress={this._onPress.bind(this)} style={styles.button}><Text style={styles.font}>Log in</Text></TouchableHighlight>
                {errorCtrl}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,

        alignSelf: 'stretch',
        padding: 10,
        paddingTop: 100
    },

    font: {
        color: '#fff',
        fontSize: 25
    },

    button: {
        height: 50,
        marginTop: 10,
        backgroundColor: '#48bbec',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textField: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 25,
        borderWidth: 1,
        borderColor: '#48bbec'
    },

    error: {
        color: 'red',
        paddingTop: 10
    }


});
module.exports = Login;
