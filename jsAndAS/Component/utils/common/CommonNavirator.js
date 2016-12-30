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
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

export default class CommonNavigator extends Component {
  render() {
    return (
      <Image style={styles.imageStyle}  source={require('../../../images/bg-status_01.png')}>
      <View style={styles.navBarStyle} >
        {/**左 图片或文字*/}
         <TouchableOpacity onPress={this.popClick.bind(this)} >
            
           {this._renderLeftView()}
           
         </TouchableOpacity>
        {/**中 标题*/}
          <Text style={styles.titleStyle} >{this.props.title}</Text>
        {/**右 */}
          
          {this._renderRightView()}
          
      </View>
      </Image>
    );
  }
  popClick(){
    if(this.props.Picker){
      this.props.Picker.hide()
    }
    navigator.pop()
  }
  _renderLeftView(){
    //文字
    if(this.props.leftText){
      return(
        <Text style={[styles.textStyle,{marginLeft:13}]} >{this.props.leftText}</Text> 
      )
    }
    else{//图片
      return(
        <Image  style={{height:30,width:30,}} source={require('../../../images/fanhui_icon_toolbar.png')} />
      )
    }
  }

  _renderRightView(){
    if(this.props.rightText){
      //右边有文字时
      return(
        <TouchableOpacity onPress={this.props.rightClick()}>
          <Text style={[styles.textStyle,{marginRight:10} ]}>{this.props.rightText} </Text>
        </TouchableOpacity>
      )
    }else{
      //右边没有文字时
      return(
        // <Image style={{width:30,height:30}} source={require('../../images/tongzhi_toolbar_yytj.png')} />
        <Text style={[styles.textStyle,{marginLeft:13,color:'transparent'}]} >  </Text> 

      )
    }
  }


}

const styles = StyleSheet.create({
  navBarStyle:{
    marginTop: (Platform.OS =='ios') ? 22 : 0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height : 44,
    width:screenWidth,
    marginBottom:0
    // backgroundColor : '#5ecece',

  },
imageStyle:{
  height : (Platform.OS =='ios') ? 64 : 44,
  width:screenWidth
},

  textStyle:{
    color:'#ffffff',
    fontSize:screenWidth<375?17:19,
    backgroundColor:'transparent',
  },
  titleStyle:{
    color:'#ffffff',
    fontSize:screenWidth<375?18:20,
    fontWeight:'bold',
    backgroundColor:'transparent',

  },
 

});
