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
    Text,
    ActivityIndicator,
} from 'react-native'
let windowWidth = Dimensions.get('window').width;
let imageSize=25;
let windowHeight = (Platform.OS === 'android') ? Dimensions.get('window').height - 25 : Dimensions.get('window').heigh
import TopView from '../../utils/common/TopView';
import LogApp from './LoginApp'
import MyButton from '../../utils/common/MyButton'
export  default  class ChangePwdSuccess extends  Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <TopView
                    isImagebg={false}
                    title={'找回密码'}
                    isshowLine={false}
                    navi={this.props.navigator}></TopView>
                <View style={{marginTop:30,alignItems:'center'}}>
                    <Image style={{width:60,height:60,marginTop:30}} source={require('../../../images/icon_cg_zhmmcg.png')}></Image>
                    <Text style={{marginTop:29,fontSize:15,color:'#222222'}}>恭喜您重置密码成功！</Text>

                    <View style={{marginTop:80}}>
                        <MyButton
                            onClick={this.loginEvent.bind(this)}
                            buttonText="马上登录"/>
                    </View>

                </View>
            </View>);
    }
    loginEvent(){
        const{navigator}=this.props;
        if(navigator)
        {
            navigator.push({
                name:LogApp,
                component:LogApp
            });
        }
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
    modalStyles:{
        height:80,
        backgroundColor:'#fff',
        marginHorizontal:40,
        borderRadius:4,
        flexDirection:'row',
        alignItems:'center'
    },
});

