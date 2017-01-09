/**
 * Created by Yongfa on 2016/12/28.
 */
/**
 *预约体检模块下的套餐页面
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Dimensions,
    Platform,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
}from 'react-native'
let width=Dimensions.get('window').width;
let height=(Platform.OS==="android")?(Dimensions.get('window').height-25):Dimensions.get('window').height;
let scraleWidth=width/375,scraleHeight=height/667;
import TopView from '../../utils/common/TopView';
import ScrollViewIndiector from '../../utils/common/ScrollViewIndiector'
var ScrollableTabView = require('react-native-scrollable-tab-view');
import ComboConent from './comboPager/comboContent'
let itemHeight=3;
let comboSource=[
    {comboName:'精英人群',comboImg:require('../../../images/kebi.png')},
    {comboName:'应酬一族',comboImg:require('../../../images/kebi.png')},
    {comboName:'亚健康',comboImg:require('../../../images/kebi.png')},
    {comboName:'肿瘤',comboImg:require('../../../images/kebi.png')},
    {comboName:'女性专科',comboImg:require('../../../images/kebi.png')},
    {comboName:'心血管',comboImg:require('../../../images/kebi.png')},
];
export default class Combo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isdefaultClick:0,
            comboUrl:'精英人群'
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <ScrollView horizontal={true}
                                pagingEnabled={true}
                                ref={(ref)=>this.scrollViewID=ref}>
                        {comboSource.map((item,i)=>this.renderScItem(item,i))}
                    </ScrollView>
                </View>
                 <View style={{flex:1}}>
                     <ComboConent
                     url={this.state.comboUrl}></ComboConent>
                 </View>
            </View>
        );
    }
    //---渲染每个套餐类型的view
    renderScItem(item,i){
        return(
            <TouchableOpacity onPress={this.indiectClick.bind(this,i)} key={i} activeOpacity={1}>
                <View  style={{marginLeft:10, alignItems:'center'}}>
                    <Image style={{width:60*scraleWidth,height:60*scraleHeight,borderRadius:60*scraleHeight/2,borderWidth:1,}} source={item.comboImg}></Image>
                    <Text style={{fontSize:15,color:'#8c8c8c'}}>{item.comboName}</Text>
                    {this.scrollIndiector(i)}
                </View>
            </TouchableOpacity>
        );
    }
    indiectClick(position){
        let combo;
        switch(position){
            case 0:
                combo='精英人群'
                break;
            case 1:
                combo='应酬一组'
                break;
            case 2:
                combo='亚健康'
                break;
            case 3:
                combo='肿瘤'
                break;
            case 4:
                combo='女性专科'
                break;
            case 5:
                combo='心血管'
                break;
        }
        this.setState({
            isdefaultClick:position,
            comboUrl:combo,
        });
    }
    scrollIndiector(position){
        if(this.state.isdefaultClick==position)
        {
            return(
                <View style={{width:60*scraleWidth,height:itemHeight,backgroundColor:'#778ef2',marginTop:3}}></View>
            );
        }
        return(
            <View style={{width:60*scraleWidth,height:itemHeight,backgroundColor:'#fff'}}></View>
        );
    }
}
const styles = StyleSheet.create({
    android: {
        flex: 1,
        backgroundColor:'#fff',
        marginBottom:(Platform.OS==="ios"?56:80),
        width:width,
    },
});