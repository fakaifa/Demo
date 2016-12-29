/**
 * Created by Yongfa on 2016/12/28.
 */
/**
 * 身体状况页面
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Dimensions,
}from 'react-native'
let {width,height}=Dimensions.get('window');
export default class healthyState extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',width:width,height:height,alignItems:'center'}}>
                <Text>身体状况页面</Text>
            </View>
        );
    }
}