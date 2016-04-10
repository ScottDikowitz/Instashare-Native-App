'use strict';

var React = require('react-native');
import Feed from 'Instashare/components/Feed';
import CurrentUserStore from 'Instashare/stores/currentUser';
import Profile from 'Instashare/components/profile';
var {
  ActivityIndicatorIOS,
  TextInput,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
} = React;

class AppContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 'feed',
            user: {username: "", id: 0}
        };
    }

    componentDidMount() {
        CurrentUserStore.addListener(this._changed.bind(this));
        CurrentUserStore.checkUser();
    }

    componentWillUnmount() {
        CurrentUserStore.removeListener(this._changed.bind(this));
    }

    _changed() {
        this.setState({user: CurrentUserStore.getCurrentUser()});
    }


    render(){
        return (
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item
                title="feed"
                selected={this.state.selectedTab === 'feed'}
                onPress={()=> {this.setState({selectedTab: 'feed'})}}
                icon={require('image!Activity')}
                >
                    <Feed/>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                title="profile"
                selected={this.state.selectedTab === 'profile'}
                onPress={()=> {this.setState({selectedTab: 'profile'})}}
                icon={require('image!Profile')}
                ><Profile user={this.state.user}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});
export default AppContainer;
