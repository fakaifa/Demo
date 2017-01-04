/**
 * Created by Yongfa on 2016/12/31.
 */
import React,{Component} from 'react'
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text,
}from 'react-native'
let {width,height}=Dimensions.get("window");
export default class MyButton extends  Component{
    render(){
        return(
            <TouchableOpacity
                style={styles.MyButtonStyles}
                activeOpacity={0.9} onPress={()=>{this.props.onClick()}}>
                <Text style={styles.buttonStyles}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    }
}
const styles=StyleSheet.create({
    MyButtonStyles:{
        width:width*0.75,
        height:40,
        borderRadius:20,
        backgroundColor:'#778ef2',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonStyles:{
        color:'#fff',fontSize:15,
    }
})