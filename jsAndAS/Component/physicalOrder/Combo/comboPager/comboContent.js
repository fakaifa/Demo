/**
 * Created by Yongfa on 2017/1/6.
 *
 * 肿瘤
 */
import React,{Component} from 'react'
import {
    View,
    Text,
}from 'react-native';
import PaySuccess from '../../../physicalOrder/PayResult/PaySuccess'
export  default class comboContent extends Component{
    render(){
        return(
            <View>
                <Text onPress={this.pay.bind(this)}>{this.props.url}</Text>
            </View>
        );
    };
    pay(){
        alert('jjjj')
        if(this.props.navi)
        {
            this.props.navi.push({
                name:PaySuccess,
                component:PaySuccess
            })
        }
    }
}