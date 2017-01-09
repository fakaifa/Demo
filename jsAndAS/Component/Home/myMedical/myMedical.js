/**
 * Created by Yongfa on 2016/12/28.
 */
/**
 * 我的体检页面
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Dimensions,
}from 'react-native'
let {width,height}=Dimensions.get('window');
var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;
import Paysuccess from '../../physicalOrder/PayResult/PaySuccess'
export default class myMedical extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',width:width,height:height,alignItems:'center'}}>
                <Text style={{color:'#f00'}} onPress={this.click.bind(this)}>我的体检</Text>
                <MessageBarAlert ref={(ref)=>this.textID=ref} />
            </View>
        );
    }
    click(){
      if(this.props.navi)
      {
          alert('jjj')
          this.props.navi.push({
              name:Paysuccess,
              component:Paysuccess
          });
      }else{
          alert('88888')
      }
    }
}