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

        this.state = {
            comment: ""
        };
    }

    onChangeComment(e) {
        this.setState({comment: e.nativeEvent.text});
    }

    createComment() {
        var comment = {content: this.state.comment, post_id: this.props.postId }

        this.props.onPostComment(comment);
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
                    <View style={styles.createComment}>
                        <TextInput onChange={this.onChangeComment.bind(this)} style={styles.textField} placeholder="add a comment..."></TextInput>
                        <TouchableHighlight onPress={this.createComment.bind(this)} style={styles.button}><Text style={styles.font}>Comment!</Text></TouchableHighlight>
                    </View>
          </View>
        );
    }
}

var styles = StyleSheet.create({

    createComment: {
        flex: 1,
        flexDirection: 'row',
        height: 25,
    },

    font: {
        color: '#fff',
        fontSize: 16,
    },

    name: {
        flex:1
    },

    post: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#ccc',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    button: {
        flex: 1,
        backgroundColor: '#48bbec',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textField: {
        flex: 3
    }


});
module.exports = Post;
