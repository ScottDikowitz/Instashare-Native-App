/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Feed from './components/Feed';
import Login from './components/Login';

class Instashare extends Component {

    constructor(props){
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    onLogin () {
        this.setState({loggedIn: true});
    }
  render () {
      var component = this.state.loggedIn ? <Feed/> : <Login onLogin={this.onLogin.bind(this)}/>;
    return (
      <View style={styles.container}>
        {component}
        <View style={styles.container}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Instashare', () => Instashare);
