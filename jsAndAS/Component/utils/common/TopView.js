/**
 * Created by Yongfa on 2016/12/30.
 */
import React,{Component} from 'react'
import {
    Dimensions,
    Platform,
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native'
let {width,height}=Dimensions.get('window');
export default  class TopView extends  Component{
    constructor(props){
        super(props);
        this.state={
               isImagebg:false,
            };
    }
    render(){
        return(
        <View>
            {this.topView()}
            {this.contentView()}
        </View>
        );
    }
    topmyView(){
        return(
            <View style={styles.navigatorBar}>
                {/**左 图片或文字*/}
                <TouchableOpacity
                    onPress={this.popClick.bind(this)}>

                    {this.renderLeftView()}

                </TouchableOpacity>
                {/**中 标题*/}
                <Text style={styles.titleStyle} >{this.state.title}</Text>
                {/**右 */}
                {this.renderRightView()}
            </View>
        );
    }
    //-----顶部实现的view
    topView(){
        if(this.state.isImagebg)
        {
            return (
                <Image style={styles.imageStyle}  source={require('../../../images/bg-status_01.png')}>
                    {this.topmyView()}
                </Image>
            );
        }else{
            return(
                <View style={[{backgroundColor:'#fff'},styles.navigatorBar]}>
                    {this.topmyView()}
                </View>
            );
        }
    }
    //----左边的view
    renderLeftView(){
        //文字
        if(this.state.leftText){
            return(
                <Text style={[styles.textStyle,{marginLeft:13}]} >{this.state.leftText}</Text>
            )
        }
        else{//图片
            return(
                <Image  style={{height:30,width:30,}} source={require('../../../images/icon_fh.png')} />
            )
        }
    }
    //----右边的view
    renderRightView(){
        if(this.state.rightText){
            //右边有文字时
            return(
                <TouchableOpacity onPress={this.rightClick.bind(this)} style={{width:30,height:30}}>
                    <Text style={[styles.textStyle,{marginRight:10} ]}>{this.state.rightText} </Text>
                </TouchableOpacity>
            )
        }else{
            //右边没有文字时
            return(
            <View style={{width:30,height:30,backgroundColor:'#fff'}}>
            </View>
            )
        }
    }
    //-----左边的点击事件
    popClick(){
        const {navigator}=this.props;
        if(navigator)
        {
            navigator.pop();
        }
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    navigatorBar: {
        width: width,
        height: Platform.OS === 'ios' ? 64 : 40,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'#cdcdce'
    },
    imageStyle:{
        height : (Platform.OS =='ios') ? 64 : 44,
        width:width
    },
    titleStyle:{
        color:'#000',
        fontSize:width<375?18:20,
        fontWeight:'bold',
        backgroundColor:'transparent',
    },

});