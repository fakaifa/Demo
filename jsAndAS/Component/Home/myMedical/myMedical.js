/**
 * Created by Yongfa on 2016/12/28.
 */
/**
 * 我的体检页面
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Dimensions,
}from 'react-native'
let {width,height}=Dimensions.get('window');
export default class myMedical extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',width:width,height:height,alignItems:'center'}}>
                <Text style={{color:'#f00'}}>我的体检</Text>
            </View>
        );
    }
}