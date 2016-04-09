'use strict';

var React = require('react-native');
import Feed from 'Instashare/components/Feed';
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
            selectedTab: 'feed'
        };
    }


    render(){
        return (
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item
                title="feed"
                selected={this.state.selectedTab === 'feed'}
                onPress={()=> {this.setState({selectedTab: 'feed'})}}
                source={require('image!activity_grid_2_filled-25')}
                >
                    <Feed/>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                title="profile"
                selected={this.state.selectedTab === 'profile'}
                onPress={()=> {this.setState({selectedTab: 'profile'})}}
                source={require('image!activity_grid_2_filled-25')}
                ><Text>hello</Text>
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
