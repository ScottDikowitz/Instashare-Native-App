'use strict';

var React = require('react-native');
var Comments = require('./../UI/Comments');
import FeedStore from 'Instashare/stores/feed';
import { fetchPosts } from './../api_util/apiUtil';
var {
  ActivityIndicatorIOS,
  Dimensions,
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
        this._changed = this._changed.bind(this);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        FeedStore.addListener(this._changed);
        fetchPosts();

    }

    componentWillUnmount() {
        FeedStore.removeListener(this._changed);
    }
    getHeight(dimensions) {
        return dimensions.height/(dimensions.width / Dimensions.get('window').width);
    }

    _changed() {
        this.setState({posts: FeedStore.getPosts()});
    }

    render(){
        return (
            <View style={styles.container}>
                    <ScrollView style={styles.scroll}>
                    {this.state.posts.map((post, i)=>{
                        return <View key={`post-${i}`} style={styles.post}>
                            <Text style={styles.name}>{post.user.username}</Text>
                                <Image
                                    style={{flex: 3, width: Dimensions.get('window').width, height: this.getHeight(post.dimensions)}}
                                    source={{uri: post.image}}
                                    onLoadEnd={this.onLoadEnd}/>
                                <Text style={{paddingTop: 2}}>{`${post.user.username}: ${post.caption}`}</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    scroll: {
        flex: 1,
        width: Dimensions.get('window').width,
    },

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
module.exports = Feed;
