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
  TabBarIOS,
  View
} from 'react-native';

import Feed from './components/Feed';
import Login from './components/Login';
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
        var component = this.state.loggedIn ? <Feed/> : <Login onLogin={this.onLogin.bind(this)}/>;
        return (
            <View style={styles.container}>
                {component}
            </View>
        );
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
