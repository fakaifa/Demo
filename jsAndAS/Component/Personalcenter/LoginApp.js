/**
 * Created by Yongfa on 2016/12/30.
 */
import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'
import DialogComponent from '../utils/common/DialogComponent'
import TopView from '../utils/common/TopView'
let {width,height}=Dimensions.get('window');
import Network from '../utils/Network'
import Urlheader from '../utils/common/Urlheader';
import MyButton from '../utils/common/MyButton'
import ReceivePassword from './RetrievePassword'
import styles from './ComInputStyles'
import Register from './Register'
export  default  class LoginApp extends DialogComponent{
    constructor(props)
    {
        super(props)
        this.state = {
             transparent:true,
             modalVisible:false,
             phoneNumber:'',
             passWord:'',
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <TopView
                    isImagebg={false}
                    isshowLine={false}
                    navi={this.props.navigator}/>
                <View style={styles.loginStyles}>
                    {/*分上下两部分*/}
                    {/*logo图*/}
                    <View style={styles.logViewStyles}>
                        <Image source={require('../../images/img_logo_dl.png')} style={styles.imgLogStyles}>
                        </Image>
                        <Text style={{fontSize:15,color:'#778ef2',marginTop:10}}>登录</Text>
                        <View style={{width:157,height:3,backgroundColor:'#778ef2',marginTop:20,}}>
                        </View>
                        {/*用户输入的手机号和密码*/}
                        <View style={{width:width*0.4,marginTop:20,alignItems:'center'}}>
                            {/*手机号*/}
                            <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                                <Image source={require('../../images/icon_sjh_dl.png')} style={styles.imgStyles}></Image>
                                <View style={{height:40}}>
                                    <TextInput style={styles.textinputStyles}
                                               placeholder={'请输入手机号'}
                                               placeholderTextColor="#8c8c8c"
                                               underlineColorAndroid="transparent"
                                    onChangeText={(phoneNumber)=>{this.setState({phoneNumber})}}
                                    ></TextInput>
                                </View>

                                </View>
                            </View>
                            {/*密码*/}
                            <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                                <Image source={require('../../images/icon_qr_zc.png')} style={styles.imgStyles}></Image>
                                <TextInput style={styles.textinputStyles}
                                    placeholder={'请输入密码'}
                                    placeholderTextColor="#8c8c8c"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(passWord)=>{this.setState({passWord})}}
                                           secureTextEntry={true}
                                ></TextInput>
                            </View>
                    </View>
                    {/*立即注册和忘记密码*/}
                    <View style={{height:30,flexDirection:'row',alignItems:'center',marginTop:15,}}>
                        <TouchableHighlight onPress={this.Event.bind(this,1)}
                                          activeOpacity={1}
                                          underlayColor="#778ef2" >
                            <Text style={styles.textStyles} >忘记密码</Text>
                        </TouchableHighlight>

                        <View style={{marginLeft:5,marginRight:5,width:1,height:15,backgroundColor:'#778ef2'}}></View>
                        <TouchableHighlight onPress={this.Event.bind(this,2)}
                                            activeOpacity={1}
                                            underlayColor="#778ef2"
                                            TouchableHighlight>
                            <Text style={styles.textStyles} >注册健康党</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{marginTop:40}}>
                        <MyButton buttonText="立即登录"
                                  onClick={this.loginEvent.bind(this)}/>
                    </View>

                </View>
                {this.showDialog()}
            </View>
        );
    }
    //----忘记密码和注册事件
    Event(tag){
            this.setState({
                textColor:"#778ef2"
            });
            let toname,tocomponent;
            if(this.props.navigator)
            {
                if(tag===1)
                {
                    toname=ReceivePassword;
                    tocomponent=ReceivePassword;
                }else if(tag==2)
                {
                    toname=Register;
                    tocomponent=Register;
                }
                this.props.navigator.push({
                    name:toname,
                    component:tocomponent,
                });
            }

    }
    loginEvent(){
        if(this.state.phoneNumber)
        {
            if(this.state.phoneNumber.length==11)
            {
                let regres=/^1[0-9]{10}$/;

                if(regres.test(this.state.phoneNumber))
                {
                    if(this.state.passWord.length==6)
                    {
                        this.LoginPostInfo();
                    }else{
                        alert('密码不足6位')
                    }
                }else{
                    alert('请输入正确的手机号码')
                }
            }else {
                alert('手机号必须为11位')
            }
        }else{
            alert('手机号不能为空')
        }
    }
    LoginPostInfo(){
       let loginUrl=Urlheader.URL.header+"/api/api-token-auth/";
        // this.setState({
        //     modalVisible:true,
        // });
        // alert('phone='+this.state.phoneNumber+'---password='+this.state.passWord)
        let param={
            'username':this.state.phoneNumber,
            'password':this.state.passWord,
        }
        AsyncStorage.setItem("Login","1111").then((err)=>{
            if(err)
            {
                alert(Error.message)
            }else{
                alert('登录陈宫')
            }
        });
        // Network.post(loginUrl,param,(json,isSuccess)=>{
        //         if(isSuccess)
        //         {
        //            // alert(json+'----')
        //         }else{
        //             // alert('----error-'+json)
        //         }
        //         //---登录等待框消失
        //         // this.setState({
        //         //     modalVisible:false,
        //
        //     // });
        //
        // })
    }
    /**
     *自定义弹出框的内容，此方法会自动有父类调用
     **/
    content(){
        const innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: 'transparent',}
            : null
        return(
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                <View style={styles.modalStyles}>
                    <ActivityIndicator style={{marginLeft:20,}}
                                       size={'large'}></ActivityIndicator>
                    <Text style={{marginLeft:10,}}>正在登录,请稍后.......</Text>
                </View>
            </View>
        );
    }
}
