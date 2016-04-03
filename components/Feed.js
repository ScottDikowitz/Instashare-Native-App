'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} = React;

class Feed extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }

    _onPress() {
        fetch('http://localhost:3000/api/session', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'Guest',
            password: '123456',
          })
      }).then((response) =>{
            return response.json();
        }).then((results)=>{
          debugger;
      });

    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Feed</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 10,
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


});
module.exports = Feed;
