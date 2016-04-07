'use strict';

var React = require('react-native');
var Comments = require('./../UI/Comments');

var {
  Dimensions,
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ListView,
  TouchableHighlight,
} = React;

class Post extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <View style={styles.post}>
                <Text style={styles.name}>{this.props.username}</Text>
                    <Image
                        style={{flex: 3, width: this.props.dimensions.width, height: this.props.dimensions.height}}
                        source={{uri: this.props.image}}
                        />
                    <Text style={{paddingTop: 2}}>{`${this.props.username}: ${this.props.caption}`}</Text>
                    <Comments comments={this.props.comments}/>
          </View>
        );
    }
}

var styles = StyleSheet.create({

    font: {
        color: '#fff',
        fontSize: 25
    },

    name: {
        flex:1
    },

    post: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#ccc',
        // marginBottom: 20,
        alignSelf: 'stretch',
        justifyContent: 'center'

    }


});
module.exports = Post;
