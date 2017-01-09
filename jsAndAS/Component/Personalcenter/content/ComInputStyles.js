/**
 * Created by Yongfa on 2016/12/31.
 */
import React,{Component}from 'react'
import {
    StyleSheet,
    Dimensions,
} from 'react-native'
let {width,height}=Dimensions.get('window');
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    loginStyles:{
        width:width,
        alignItems:'center',
        justifyContent:'center'
    },
    logViewStyles:{
        alignItems:'center',
    },
    imgLogStyles:{
        height:150,
        width:150,
        marginTop:30,
    },
    phoneNumberStyles:{
        flexDirection:'row',
        width:width*0.75,
        alignItems:'center',
        height:40,
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:'#cdcece',
        marginTop:5,
    },
    imgStyles:{
        width:23,
        height:23,
    },
    textinputStyles:{
        width:width*0.75*0.75,
        height:40,
    },
    phoneStyle:{
        width : 0.75 * width*0.9,
        marginLeft : 10,
        fontSize :width<375? 14:16,
        color : 'white',
        height: 40,
    },
    textStyles:{
        fontSize:15,
        color:'#cdcdce'
    },
        modalbackgroundStyles:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'rgba(0,0,0,0.5)'
        },
        modalStyles:{
            height:80,
            backgroundColor:'#888888',
            marginHorizontal:40,
            borderRadius:4,
            flexDirection:'row',
            alignItems:'center'
        },
});
export default styles;