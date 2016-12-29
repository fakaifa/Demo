/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {

 AsyncStorage

} from 'react-native';

let keyName = 'USERTOKEN';
let token = '';
let  isOK;
let header = {

 };
export default class network extends Component {

 //删除token,可以用作注销
  static deleteToken(callback){
      AsyncStorage.removeItem(keyName,function(errs) {
                if (!errs) {
                  callback(true)
                }else{
                  callback(false)
                }
          });
  }

 static get(url,params,callback){
  //首先获取token
  AsyncStorage.getItem(keyName)
        .then((value)=>{
                 //获取成功
                if (value){
                 token = value;
                }else{

                 token = '';

                }
                if(params){
                    let paramsArray = [];
                    // //拼接参数
                    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                    if (url.search(/\?/) === -1) {
                            url += '?' + paramsArray.join('&')
                        } else {
                            url += '&' + paramsArray.join('&')
                        }
                 }
                 header = {
                         'Accept': 'application/json;version=1.0',
                         'Content-Type': 'application/json',
                         Authorization : token,
        }
                 //fetch请求
                 fetch(url,{
                 method :'GET',
                 headers:header,
                })
                .then((response) => {

                     if (response.ok) {
                         //请求成功
                     isOK = true;
                     } else{
                         isOK = false;
                     }
                     //isok默认是false
                      return response.json();
                     })
                .then((responseJson) => {
                        if (isOK == true){
                            callback(responseJson,true)
                        }else{
                            //在这里处理一下返回的错误信息
                            // console.log(responseJson)


                             let error = NetRequest.resolveErrorJson(responseJson)
                            callback(error,false)
                        }
                    })
                .catch((err)=> {
                     callback(err,false)
                }).done()

        })
        .catch((error) =>{
          callback('网络异常',false)
        })
}
 static post(url,params,callback){

     //首先获取token
  AsyncStorage.getItem(keyName)
        .then((value)=>{
                 //获取成功
                if (value){
                 token = value;
                }else{
                 token = '';
                }
                if(params){
                    let paramsArray = [];
                    //拼接参数
                    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                    if (url.search(/\?/) === -1) {
                            url += '?' + paramsArray.join('&')
                        } else {
                            url += '&' + paramsArray.join('&')
                        }
                 }
                 header = {
                        'Accept': 'application/json;version=1.0',
                         'Content-Type': 'application/json',
                         Authorization : token,
                 }
                 //fetch请求
                 fetch(url,{
                 method :'POST',
                 headers:header,
                 body:JSON.stringify(params),
                })
                .then((response) => {

                     if (response.ok==true) {
                         //请求成功
                       isOK = true;
                     }else{
                        isOK = false;
                     }

                      return response.json();
                     })
                .then((responseJson) => {
                        if (isOK == true){
                            callback(responseJson,true)
                        }else{
                            //在这里处理一下返回的错误信息
                            // console.log(responseJson)

                            let error = NetRequest.resolveErrorJson(responseJson)
                            callback(error,false)

                        }
                    })
                .catch((err)=> {
                    callback(err,false)


                }).done()
        })
        .catch((error) =>{
          callback('获取token失败',false)
        })

    }

 static put(url,params,callback){

     //首先获取token
  AsyncStorage.getItem(keyName)
        .then((value)=>{
                 //获取成功
                if (value){
                 token = value;
                 console.log('赵言2b')
                }else{
                 token = '';
                 console.log('赵言2b')
                }
                if(params){
                    let paramsArray = [];
                    //拼接参数
                    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                    if (url.search(/\?/) === -1) {
                            url += '?' + paramsArray.join('&')
                        } else {
                            url += '&' + paramsArray.join('&')
                        }
                 }
                 header = {
                        'Accept': 'application/json;version=1.0',
                         'Content-Type': 'application/json',
                         Authorization : token,
                 }
                 //fetch请求
                 fetch(url,{
                 method :'PUT',
                 headers:header,
                 body:JSON.stringify(params),
                })
                .then((response) => {

                     if (response.ok==true) {
                         //请求成功
                     isOK = true;
                     }else{
                        isOK = false;
                     }
                     //isok默认是false
                      return response.json();
                     })
                .then((responseJson) => {
                        if (isOK == true){
                            callback(responseJson,true)
                        }else{
                            //在这里处理一下返回的错误信息
                            // console.log(responseJson)

                            let error = NetRequest.resolveErrorJson(responseJson)
                            callback(error,false)
                        }
                    })
                .catch((err)=> {

                     callback('网络异常',false)
                })
        })
        .catch((error) =>{
          callback('获取token失败',false)
        })

    }
    static delete(url,params,callback){

     //首先获取token
     AsyncStorage.getItem(keyName)
        .then((value)=>{
                 //获取成功
                if (value){
                 token = value;
                }else{
                 token = '';
                }
                if(params){
                    let paramsArray = [];
                    //拼接参数
                    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                    if (url.search(/\?/) === -1) {
                            url += '?' + paramsArray.join('&')
                        } else {
                            url += '&' + paramsArray.join('&')
                        }
                 }
                 header = {
                        'Accept': 'application/json;version=1.0',
                         'Content-Type': 'application/json',
                         Authorization : token,
                 }
                 //fetch请求
                 fetch(url,{
                 method :'DELETE',
                 headers:header,
                 body:JSON.stringify(params),
                })
                .then((response) => {

                     if (response.ok==true) {
                         //请求成功
                     isOK = true;
                     }else{
                        isOK = false;
                     }
                     //isok默认是false
                      return response.json();
                     })
                .then((responseJson) => {
                        if (isOK == true){
                            callback(responseJson,true)
                        }else{
                            //在这里处理一下返回的错误信息
                            // console.log(responseJson)

                            let error = NetRequest.resolveErrorJson(responseJson)
                            callback(error,false)
                        }
                    })
                .catch((err)=> {


                     callback('网络异常',false)
                })
        })
        .catch((error) =>{
          callback('获取token失败',false)
        })

    }
   static resolveErrorJson(error){
         let errorKeyAry= [];
         Object.keys(error).forEach(key => errorKeyAry.push(key));
         if (errorKeyAry[0] === 'detail'){
             return error.detail;
         }else if(errorKeyAry[0] === 'errors'){
             return error.errors[0];
         }else{
             return error[errorKeyAry[0]][0];
         }
    }

}
