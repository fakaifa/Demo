/**
 * Created by Yongfa on 2016/12/30.
 */
import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
} from 'react-native'
import DialogComponent from '../utils/common/DialogComponent'
let {width,height}=Dimensions.get('window');
export  default  class LoginApp extends DialogComponent{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.loginStyles}>
                    {/*分上下两部分*/}
                        {/*logo图*/}
                        <View style={styles.logViewStyles}>
                            <Image source={require('../../images/img_logo_dl.png')} style={styles.imgLogStyles}>
                            </Image>
                            <Text style={{fontSize:15,color:'#778ef2',marginTop:20}}>登录</Text>
                            <View style={{width:157,height:3,backgroundColor:'#778ef2',marginTop:20}}></View>
                        </View>
                    {/*用户输入的手机号和密码*/}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loginStyles:{
        width:width*0.7,
        alignItems:'center',
    },
    logViewStyles:{
        height:150,
        width:150,
        alignItems:'center'
    },
    imgLogStyles:{
        height:150,
        width:150,
    }
});