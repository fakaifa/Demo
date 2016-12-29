/**
 * Created by Yongfa on 2016/12/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    NetInfo,
    TouchableOpacity,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home'
import Personalcenter from './Personalcenter/Personalcenter'
import PhrysicalOrder from './physicalOrder/physicalOrder'
export default class  HeathyShell extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedTab : 'sy'
        };
    }
    render(){
        navigator = this.props.navigator;
        return(
            <View style={{flex: 1}}>
                <TabNavigator Style={styles.tab} >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'yytj'}
                        title="预约体检"
                        selectedTitleStyle = {styles.selectedTextStyle}
                        renderIcon={() => <Image source={require('../images/yytj_tabbar_n.png')} />}
                        renderSelectedIcon={() => <Image source={require('../images/yytj_tabbar_h.png')} />}
                        onPress={() => this.setState({ selectedTab: 'yytj' })}>
                        <PhrysicalOrder   navigator = {navigator}/>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'sy'}
                        title="首页"
                        selectedTitleStyle = {styles.selectedTextStyle}
                        renderIcon={() => <Image source={require('../images/hdzx_tabbar_n.png')} />}
                        renderSelectedIcon={() => <Image source={require('../images/hdzx_tabbar_h.png')} />}
                        onPress={() => this.setState({ selectedTab: 'sy' })}>
                        <Home navigator = {navigator}/>

                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'grzx'}
                        title="个人中心"
                        selectedTitleStyle = {styles.selectedTextStyle}
                        renderIcon={() => <Image source={require('../images/grzx_tabbar_n.png')} />}
                        renderSelectedIcon={() => <Image source={require('../images/grzx_tabbar_h.png')} />}
                        onPress={() => this.setState({ selectedTab: 'grzx' })}>
                        <Personalcenter navigator = {navigator}/>
                    </TabNavigator.Item>

                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectedTextStyle :{
        color:'#5ecece',

    },

});