/**
 * Created by Yongfa on 2016/12/28.
 */
/**
 *预约体检模块下的医院页面
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Dimensions,
}from 'react-native'
let {width,height}=Dimensions.get('window');
export default class Hospital extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',width:width,height:height,alignItems:'center'}}>
                <Text>医院页面</Text>
            </View>
        );
    }
}