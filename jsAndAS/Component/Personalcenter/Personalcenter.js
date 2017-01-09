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
    TouchableHighlight,
    Dimensions,Platform,
    Image,ScrollView,

} from 'react-native';
let width=Dimensions.get('window').width;
let height=(Platform.OS==="android")?Dimensions.get('window').height-25 :Dimensions.get('window').height;
let scaleWidth=width/375,scaleHeight=height/667;
import Button from '../utils/common/CustomButton'
import DialogComponent from '../utils/common/DialogComponent'
import LoginApp from './content/LoginApp'
import ChangePwdSuccess from './content/ChangePwdSuccess'
import HealthyPresent from './HealthyPresent'
import ContactUs from './ContactUs'
import SetPager from './SetPager'
import TopView from '../utils/common/TopView'
import ContactList from './contactList'
let scSource=[
    {img:require('../../images/icon_cylb_grzx.png'),name:'成员列表'},
    {img:require('../../images/icon_jkhl_grzx.png'),name:'健康好礼'},
    {img:require('../../images/icon_lxwm_grzx.png'),name:'联系我们'},
    {img:require('../../images/icon_sz_grzx.png'),name:'设置'},
]
export default class Personalcenter extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TopView title="个人中心"
                         isImagebg={false}
                         isshowLine={true}/>
                <View style={{flex:0.6}}>
                    <View style={{alignItems:'center',}}>
                        <Image source={require('../../images/img_mrtx_grzx.png')} style={{width:70*scaleWidth,height:70*scaleHeight}}></Image>
                        <TouchableOpacity style={{marginTop:20}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text>哈哈</Text>
                                <Image style={{width:27.5*scaleWidth,height:27*scaleHeight}} source={require('../../images/icon_bj_grzx.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <View style={{marginLeft:80,marginRight:50}}>
                            <Image style={styles.ImgorderStyles} source={require('../../images/icon_tjdd_grzx.png')}></Image>
                            <Text>体检订单</Text>
                        </View>
                        <View style={{width:1,backgroundColor:'#cdcece'}}></View>
                        <View style={{marginLeft:50,marginRight:80}}>
                            <Image style={styles.ImgorderStyles} source={require('../../images/icon_tjbg_grzx.png')}></Image>
                            <Text>体检报告</Text>
                        </View>
                    </View>
                </View>
                <View style={{width:width,height:5,backgroundColor:'#e7eaf1',marginTop:25*scaleHeight}}></View>
                <View style={{flex:1}}>
                    <ScrollView>
                        {scSource.map((item,i)=>this.renderScollView(item,i))}
                    </ScrollView>
                </View>
            </View>
        );
    }
    //------个人中心的各个功能cell
    renderScollView(detail, i){
        let lastLine;
        if(i==scSource.length-1)
        {
            lastLine=(
                <View  style={{width:width,height:5,backgroundColor:'#e7eaf1'}} ></View>
            );
        }else{
            lastLine=(
                <View  style={{width:width,height:1,backgroundColor:'#e7eaf1'}} ></View>
            );
        }
        return(
            <TouchableOpacity key={i} onPress={this.scItemClick.bind(this,i)} activeOpacity={1}>
                <View >
                    <View  style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                        <Image style={styles.scitemStyles} source={detail.img}></Image>
                        <Text style={{marginLeft:12.5*scaleWidth,fontSize:15,color:'#575757'}}>{detail.name}</Text>
                    </View>
                    {lastLine}
               </View>
            </TouchableOpacity>
        );

    }
    //个人中心每个功能的点击事件
    scItemClick(i){
        let componentIntent;
        switch(i){
            case 0:
                componentIntent=ContactList;
                break;
            case 1:
                componentIntent=HealthyPresent;
                break;
            case 2:
                componentIntent=ContactUs;
                break;
            case 3:
                componentIntent=SetPager;
                break;
        }
        const {navigator}=this.props;
        if(navigator)
        {
            navigator.push({
                component:componentIntent,
            });
        }
    }
    //---登录事件
    loginEvent(){
       const {navigator}=this.props;
       if(navigator)
       {
           navigator.push(
               {
                   name:LoginApp,
                   component:LoginApp,
               }
           );
       }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    ImgorderStyles:{
        width:60*scaleWidth,
        height:60*scaleHeight,
    },
    scitemStyles:{
        width:27.5*scaleWidth,
        height:27.5*scaleHeight,
        marginLeft:20,
    }
});