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

class Comments extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <View style={styles.container}>
                    {this.props.comments.map((comment, i)=>{
                        return <Text key={`comment-${i}`} style={styles.name}>{`${comment.username}: ${comment.content}`}</Text>;
                    })}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },

    scroll: {
        flex: 1,
    },

    font: {
        color: '#fff',
        fontSize: 25
    },

    image: {
        flex: 5,
        width: 375,
        height: 350
    },

    name: {
        flex:1
    },

    comment: {
        flex: 1,

    }


});
module.exports = Comments;
