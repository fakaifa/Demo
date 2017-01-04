/**
 * Created by Yongfa on 2016/12/28.
 */
/**
 *预约体检模块下的医院页面
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Dimensions,
}from 'react-native'
let {width,height}=Dimensions.get('window');
import LeftList from './LeftList';
import RightList from './RightList';
export default class Hospital extends Component{
    render(){
        return(
            <View style={{width:width,height:height,alignItems:'center',flexDirection:'row'}}>
                <View style={{width:width*0.40,height:height}}>
                    <LeftList
                    ref={(ref)=>this.LeftListID=ref}
                    rightList={this.RightListID}/>
                </View>
                <View style={{width:width*0.55,height:height-25,marginLeft:width*0.05,}}>
                    <RightList
                        ref={(ref)=>this.RightListID=ref}
                        leftList={this.LeftListID}/>
                </View>
            </View>
        );
    }
}