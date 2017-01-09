/**
 * Created by Yongfa on 2016/10/24.
 */
/**
 * Created by Yongfa on 2016/10/21.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
import Swiper from 'react-native-swiper';
var Dimensions=require('Dimensions');
var width=Dimensions.get('window').height;
var height=Dimensions.get('window').width;
let scraleWidth=width/375,scraleHeight=height/667;
let bean={};
let address,bussin_time
let beanImg=[];
let _this;

export  default  class HospitalDetail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPager:0,
            hostpURL:this.props.hospitalURL,
            url:this.props.urls,
            distencess:this.props.distences,
            bean:{},
            lat:this.props.lat,
            lon:this.props.lon,
            issuccess:this.props.issuccess,
        };
    }
    render() {
        //设置tags
        let tagView=[];
        // let ServiceTags=this.state.hostpURL.tags;
        for(let i=1;i<=2;i++)
        {
            tagView.push(
                <View key={i}
                      style={styles.border_styles}>
                    <Text style={{color:'#575757',paddingHorizontal:5}}>心血管</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <View >
                    <Image source={require('../../../../images/ydy_4_1.png')} style={{height:413*scraleHeight,width:375*scraleWidth}}>
                    </Image>

                    <TouchableOpacity activeOpacity={1} onPress={this.back.bind(this)} style={styles.BlackImageStyle}>
                        <Image source={require('../../../../images/icon_fh.png')}  style={{width:30,height:30,}}/>
                    </TouchableOpacity>

                    <View style={{position:'absolute',backgroundColor:'rgba(0,0,0,0.5)',
                        bottom:15,width:75*scraleWidth,height:54*scraleHeight,right:0,alignItems:'center',
                        borderTopLeftRadius:54*scraleHeight/2,borderBottomLeftRadius:54*scraleHeight/2,marginBottom:3,marginTop:3,justifyContent:'center'}}>
                        <Text style={{fontSize:13,color:'#fff'}}>公里三甲</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex:1,backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{marginLeft:10,fontSize:width<375?18:19,marginTop:15, color:'#575757'}}>{'浙江中医院'}</Text>
                        </View>

                        <View style={{marginTop:5}}>
                            <View style={styles.lineStyles}>
                                <Image source={require('../../../../images/icon_dz_yyxq.png')} style={styles.img_styles}></Image>
                                <Text style={styles.text_styles}>{'滨江区火炬大道口221'}</Text>
                            </View>
                            <View style={styles.lineStyles}>
                                <Image source={require('../../../../images/icon_sj_yyxq.png')} style={styles.img_styles}></Image>
                                <Text style={styles.text_styles}>{'工作时间是上午8:00---下午6:00'}</Text>
                            </View>
                            <View style={styles.lineStyles}>
                                <Image source={require('../../../../images/icon_sc_yyxq.png')} style={styles.img_styles}></Image>
                                <View style={styles.ItemViewStyle}>
                                    {tagView}
                                </View>
                            </View>
                        </View>

                        <View style={{width:width,height:10,backgroundColor:'#eff4f4',marginTop:10}}></View>
                        <View >
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'center'}}>
                                <Text style={{fontSize:15,color:'#575757'}}> 一 医院介绍</Text>
                            </View>
                            <View style={{width:width,height:1,marginTop:10,backgroundColor:'#99999999'}}></View>
                            <View  style={{marginLeft:10,marginRight:10}} >
                                <Text style = {{fontSize : 15,color : '#8c8c8c',marginTop:10,lineHeight:25,marginBottom:8}}> {'对此医院的详细介绍'}</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
    //---返回键
    back(){
        const {navigator}=this.props;
        if(navigator)
        {
            navigator.pop();
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    img_styles: {
        width:15*scraleWidth,
        height:15*scraleWidth,
        marginLeft : 5,
        marginTop:5,
    },
    text_styles:{
        fontSize:13,
        marginLeft:12*scraleWidth,
        marginTop:5,
        color : '#999999'
    },
    ItemViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:12*scraleWidth,
    },
    BlackImageStyle:{
        position:'absolute',
        width:30,
        height:30,
        top:(Platform.OS==='ios') ?  22: 0,
    },
    border_styles:{
        borderRadius:5,
        borderColor:'#788ffb',
        borderWidth:1,
        marginRight:2,
    },
    lineStyles:{
        flexDirection:'row',
        marginLeft:5,
        alignItems:'center',
    }
});

