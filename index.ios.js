/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  ActivityIndicatorIOS,
  AsyncStorage,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './components/Login';
import AppContainer from './components/AppContainer';
var AuthService = require('./AuthService');
class Instashare extends Component {

    constructor(props){
        super(props);

        this.state = {
            loggedIn: false,
            loading: true
        };
    }

    componentDidMount() {
        var that = this;
        AuthService.fetchUser((results)=>{
            if (results.username){
                that.setState({loading:false, loggedIn: true});
            }
            else{
                that.setState({loading:false});
            }
        });
    }

    onLogin () {
        this.setState({loggedIn: true});
    }
    render () {
        if (this.state.loading){
            return (
                <View style={styles.loading}><ActivityIndicatorIOS animating={this.state.loading}/></View>
            );
        }
        if (this.state.loggedIn){
            return (
                <AppContainer/>
            );
        }
        else{
            return (
                <Login onLogin={this.onLogin.bind(this)}/>
            );
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

AppRegistry.registerComponent('Instashare', () => Instashare);
