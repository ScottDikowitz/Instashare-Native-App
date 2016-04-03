'use strict';

var React = require('react-native');
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
                            <Text>{post.user.username}</Text>
                            <Image
                                style={styles.image}
                                source={{uri: post.image}}/>
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
        flex: 1,
    },

    post: {
        flex: 1,
        width: 375,
        height: 200
    }


});
module.exports = Feed;
