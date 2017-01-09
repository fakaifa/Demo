/**
 * Created by Yongfa on 2016/12/28.
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
    NativeModules,
    NetInfo,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    AsyncStorage,
    Platform,
    Image,
    PixelRatio
} from 'react-native';
import Combo from './Combo/Combo'
import Hospital from './Hospital/Hospital'
let width=Dimensions.get('window').width;
let height=(Platform.OS==="android")?(Dimensions.get('window').height-25):Dimensions.get('window').height;
let scraleWidth=width/375,scraleHeight=height/667;
import Swiper from 'react-native-swiper';
import HospitalDetail from '../physicalOrder/Combo/hospital/HospitalDetail'
export default class physicalOrder extends Component {
    constructor(props) {
        super(props);
        this.checkIsLog();
        this.state= {
            currentPage:0,
            isLoginSuccess:true,
        }
    }
    //----判断是否登录成功
    checkIsLog(){
        try {
            AsyncStorage.getItem(
                'USERTOKEN',
                (error,result)=>{
                    if (error){
                        //---未登录状态
                        this.setState({
                            currentPage:1,
                            isLoginSuccess:false,
                        });
                    }else{
                        //----登录状态
                        this.setState({
                            currentPage:0,
                            isLoginSuccess:true,
                        });
                    }
                }
            )
        }catch(error){
            alert('失败'+error);
        }
        return ;
    }
    //---上面的button按钮
    chooseButton(){
        btnChoseLen=[];
        let borderRadrus=15;
        let btnColorBg,textColor;
        for(let i=0;i<2;i++)
        {
            if(i==this.state.currentPage)
            {
                btnColorBg="#778ef2";
                textColor="#fff";
            }else {
                btnColorBg="#fff";
                textColor="#778ef2";
            }
            if(i==0)
            {
                btnChoseLen.push(
                    <TouchableOpacity
                        key={i}
                        activeOpacity={1}
                        style={[styles.topButtonStyle,{backgroundColor:btnColorBg,borderTopLeftRadius:borderRadrus,
                            borderBottomLeftRadius:borderRadrus,borderWidth:1,borderColor:'#778ef2'}]}
                        onPress={this.chooseEvent.bind(this,0)}>
                        <Text style={[styles.btnTextStyles,{color:textColor}]}>套餐</Text>
                    </TouchableOpacity>)
            }else
            {
                btnChoseLen.push(
                    <TouchableOpacity
                        key={i}
                        activeOpacity={1}
                        style={[styles.topButtonStyle,{backgroundColor:btnColorBg, borderBottomRightRadius:borderRadrus,
                            borderTopRightRadius:borderRadrus,borderWidth:1,borderColor:'#778ef2'}]}
                        onPress={this.chooseEvent.bind(this,1)}>
                        <Text style={[styles.btnTextStyles,{color:textColor}]}>医院</Text>
                    </TouchableOpacity>
                )
            }
        }
        return btnChoseLen;
    }
    render(){
        return(
            <View style={styles.container}>
                {/*顶部的两个按钮  城市选择*/}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,}}>
                        {/*地区选择*/}
                            <TouchableOpacity >
                                <Text>杭州</Text>
                            </TouchableOpacity>
                            {/*套餐和医院的选择*/}
                            <View style={{width:150*scraleWidth,flexDirection:'row'}}>
                                {this.chooseButton()}
                            </View>
                            {/*为了使上面的套餐和医院选择能够居中，*/}
                            <View>
                                <TouchableOpacity onPress={this.intentHospital.bind(this)}>
                                    <Text>杭州</Text>
                                </TouchableOpacity>

                            </View>
                    </View>

                {/*套餐和医院相对象的内容展示页面*/}
                <ScrollView>
                    <View  style={{height:150,marginTop:5,}}>
                        <Swiper height={150}
                                loop={true}
                                index={0}
                                autoplay={true}
                                horizontal={true}
                                paginationStyle={{position:'absolute',bottom:10}}
                                activeDot={
                                    <View style={{backgroundColor: '#778ef2',
                                        width: 8, height: 8, borderRadius: 4, marginLeft: 3,
                                        marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                                dot={
                                    <View style={{backgroundColor:'#fff',
                                        width: 8, height: 8, borderRadius: 4, marginLeft: 3,
                                        marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>

                            {this.renderImg()}
                        </Swiper>
                    </View>
                    <View style={{flex:1,marginTop:10,}}>
                        <ScrollView
                            ref={(ref)=>this.scrollViewID=ref}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            horizontal={true}
                            // 当一帧滚动结束
                            onMomentumScrollEnd={(event)=>this.onAnimationEnd(event)}>
                            {this.contentView()}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
    intentHospital(){
        if(this.props.navigator)
        {
            this.props.navigator.push({
                name:HospitalDetail,
                component:HospitalDetail,
            });
        }
    }

    /**
     * 添加轮播图
     */
    renderImg(){
        let imgAry=[];
        imgAry.push(
           <Image key={0} style={styles.loopImgStyles}
               source={require('../../images/ydy_4_1.png')}></Image>
        );
        imgAry.push(
            <Image key={1} style={styles.loopImgStyles}
                source={require('../../images/ydy_4_2.png')}></Image>
        );
        imgAry.push(
            <Image key={2} style={styles.loopImgStyles}
                   source={require('../../images/ydy_4_3.png')}></Image>
        );
        return imgAry;

    }
    onAnimationEnd(event){
// 1.计算水平方向偏移量
        var offsetX = event.nativeEvent.contentOffset.x;

        // 2.计算当前页码
        var page = Math.floor(offsetX / width);
        // 3.更新状态机,重新绘制UI
        this.setState({
            currentPage:page
        });
    }
    //-----scrollview的每一个条目
    contentView(){
        let scrollViewLen=[];
        for(let i=0;i<2;i++)
        {
            if(this.state.isLoginSuccess)
            {
                if(i==0)
                {
                    scrollViewLen.push(<Combo key={i} />)
                }
                else{
                    scrollViewLen.push(<Hospital key={i}/>)
                }
            }else{
                if(i==0)
                {
                    scrollViewLen.push(<Hospital key={i}/>)
                }
                else{
                    scrollViewLen.push(<Combo key={i}/>)
                }
            }
        }
        return scrollViewLen;
    }
    //---------按钮点击事件
    chooseEvent(tag){
        let slipDitence;
        if(tag==0) {
            slipDitence =-width;
        }
        if(tag==1)
        {
            slipDitence=width;
        }
        this.scrollViewID.scrollTo({
            x:slipDitence,
            y:0,
            animated: true
        });
        this.setState({
            currentPage:tag
        });
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topButtonStyle:{
        flex:1,
        alignItems:'center',
    },
    btnTextStyles:{
        fontSize:14,
        padding:5,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    imageStyle:{
        height : (Platform.OS =='ios') ? 64 : 44,
        width:width,
        justifyContent:'center'
    },
    loopImgStyles:{
        width:width,
        height:150,
    }
});
