/**
 * Created by Yongfa on 2016/12/28.
 */
import React,{Component} from 'react'
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    ToastAndroid,
}from 'react-native'
import HealthyShell from "./HealthyShell"
export default class AppMain extends Component{
    _confingureScene()
    {
        return Navigator.SceneConfigs.PushFromRight ;
    }
    _renderScene(route, navigator){
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator} />
        );
    }
    render() {
        return (
            <Navigator
                initialRoute={{name:'HealthyShell',component: HealthyShell, }}
                configureScene={this._confingureScene.bind(this)}
                renderScene={this._renderScene.bind(this)}/>
        );
    }
}
AppRegistry.registerComponent('jsAndAS', () => AppMain);