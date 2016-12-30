/**
 * Created by Yongfa on 2016/12/30.
 */
/**
 * 修改密码成功
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Platform,
    Dimensions,
    TouchableOpacity,
    Image,
    Text
} from 'react-native'
let windowWidth = Dimensions.get('window').width;
let imageSize=25;
let windowHeight = (Platform.OS === 'android') ? Dimensions.get('window').height - 25 : Dimensions.get('window').heigh
import CommonN from '../utils/common/CommonNavirator'
import TopView from '../utils/common/TopView';
export  default  class ChangePwdSuccess extends  TopView{
    constructor(props){
        super(props);
            this.state={
                isImagebg:false,
                title:'忘记密码',
            };
    }
    contentView(){
        return(
            <View style={{marginTop:30,alignItems:'center'}}>
                <Image style={{width:60,height:60,marginTop:30}} source={require('../../images/icon_cg_zhmmcg.png')}></Image>
                <Text style={{marginTop:29,fontSize:15,color:'#222222'}}>恭喜您重置密码成功！</Text>
                <TouchableOpacity  style={{marginTop:80,width:240,height:40,backgroundColor:"#788ffb",justifyContent:'center',borderRadius:20}}
                                   activeOpacity={0.5}>
                    <Text style={{textAlign:'center',fontSize:15,color:'#fff'}}>马上登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    navigatorBar: {
        width: windowWidth,
        height: Platform.OS === 'ios' ? 64 : 40,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'#cdcdce'
    },
});