/**
 * Created by Yongfa on 2017/1/9.
 * 支付成功
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
} from 'react-native';
import TopView from '../../utils/common/TopView'
var Dimensions=require('Dimensions');
var width=Dimensions.get('window').height;
var height=Dimensions.get('window').width;
let scraleWidth=width/375,scraleHeight=height/667;
export  default  class PaySuccess extends  Component{
    render(){
        return(
            <View style={styles.container}>
                <TopView
                    isImagebg={false}
                    leftText={false}
                    title="购买成功"
                    isshowLine={true}/>
                <View style={{alignItems:'center',marginTop:30,marginBottom:30,}}>
                    <View style={{width:60*scraleWidth,height:200*scraleHeight}}>
                        <Image source={require('../../../images/icon_cg_gmcg.png')} style={{width:60*scraleWidth,height:200*scraleHeight}}></Image>
                    </View>
                    <Text style={{fontSize:15,color:'#778ef2'}}>购买成功</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center',width:300,height:161,borderWidth:1,borderColor:'#cdcdce',}}>
                        <Text>您已购买了</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.comboNameStyles}>{'健康体检套餐A'}</Text>
                            <View style={{width:1,backgroundColor:'#8c8c8c',marginLeft:3,marginRight:3,}}></View>
                            <Text style={styles.comboNameStyles}>{'男士套餐'}</Text>
                        </View>
                        <View style={{marginTop:30,alignItems:'center'}}>
                            <Text style={styles.textStyles}>我们对您的预约时间进行审核</Text>
                            <Text style={styles.textStyles}>审核时间约为1-3个工作日</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:50,flex:1,marginHorizontal:10}}>
                    <TouchableOpacity style={[styles.buttonStyles,{marginRight:20,}]}>
                        <Text style={styles.buttonTextStyles}>返回首页</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonStyles,{marginLeft:20}]}>
                        <Text style={styles.buttonTextStyles}>查看订单</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    },
    comboNameStyles:{
        fontSize:15,
        color:'#575757'
    },
    textStyles:{
        fontSize:15,
        color:'#8c8c8c'
    },
    buttonStyles:{
        height:82*scraleHeight,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        borderRadius:82*scraleHeight/2,
        borderColor:'#778ef2',
        borderWidth:1,
    },
    buttonTextStyles:{
        fontSize:15,
        color:'#778ef2'
    }
});
