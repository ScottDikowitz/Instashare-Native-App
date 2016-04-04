'use strict';

var React = require('react-native');
var Comments = require('./../UI/Comments')
var {
  ActivityIndicatorIOS,
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} = React;

class Feed extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('http://www.instashare.scottdikowitz.com/api/posts').then((response) =>{
            return response.json();
        }).then((results)=>{
          this.setState({posts: results});
          console.log(JSON.stringify(results));
      });

    }

    render(){
        return (
            <View style={styles.container}>
                    <ScrollView style={styles.scroll}>
                    {this.state.posts.map((post, i)=>{
                        return <View key={`post-${i}`} style={styles.post}>
                            <Text style={styles.name}>{post.user.username}</Text>
                            <Image
                                style={styles.image}
                                resizeMode={Image.resizeMode.contain}
                                source={{uri: post.image}}/>
                            <Comments comments={post.comments}/>
                      </View>;
                    })}
                    </ScrollView>
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

    post: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#ccc',
        marginBottom: 20

    }


});
module.exports = Feed;
