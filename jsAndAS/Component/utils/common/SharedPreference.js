/**
 * Created by Yongfa on 2017/1/5.
 */
import React,{Component}from 'react';
import {
    AsyncStorage,
}from 'react-native';
let key='USERTOKEN';
export default class SharedPreference extends Component{
    static setItem(value,navi){
        AsyncStorage.setItem(key,value).then((err)=>{
            if(err)
            {
                return;
            }else{
                navi.pop();
                return ;
            }
        });
    }

    /**
     * 获取验证码事件
     * @phoneNumber   用户输入的手机号
     */
}