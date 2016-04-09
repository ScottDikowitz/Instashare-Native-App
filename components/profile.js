'use strict';

import {fetchUser} from 'Instashare/api_util/apiUtil';
import UserPageStore from 'Instashare/stores/userPage';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  AsyncStorage,
  Dimensions,
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} = React;

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {}
        };

        this._changed = this._changed.bind(this);
    }

    componentDidMount() {
        UserPageStore.addListener(this._changed);
        fetchUser(this.props.user.username);
    }

    componentWillUnmount() {
        UserPageStore.removeListener(this._changed);
    }

    _changed() {
        this.setState({page: UserPageStore.getPage()});
    }

    render(){
        // if (this.state.page){
        //     debugger;
        // }

        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.state.page && this.state.page.posts.map((post, i)=>{
                        return <Image key={`profile${i}`}
                               style={{height:Dimensions.get('window').width / 3, width: Dimensions.get('window').width / 3}}
                               source={{uri: post.image}}/>;
                    })}
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },

    font: {
        color: '#fff',
        fontSize: 25
    },



});
module.exports = Profile;
