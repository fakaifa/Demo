/**
 * Created by Yongfa on 2016/12/31.
 */
import React,{}from 'react'
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
}from 'react-native'
import styles from './ComInputStyles'
import DialogComponent from '../utils/common/DialogComponent'
import TopView from '../utils/common/TopView'
let {width,height}=Dimensions.get('window');
import MyButton from '../utils/common/MyButton'
import Network from '../utils/Network'
import Urlheader from '../utils/common/Urlheader';
export default class Register extends DialogComponent{
    constructor(props)
    {
        super(props)
        this.state = {
            modalVisible:false,
            phoneNumber:'',
            safeNumber:'',
            passWord:'',
            againPassword:'',
            transparent:true,
            codeNumber:60,
            enable:false,
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
                        <Text style={{fontSize:15,color:'#778ef2',marginTop:10}}>注册</Text>
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
                                <TouchableOpacity
                                    disabled={this.state.enable}
                                    activeOpacity={0.8}
                                    onPress={this.getSafeCode.bind(this)}
                                    style={{borderRadius:5,borderColor:'#cdcdce',position:'absolute',right:0,borderWidth:1,width:90,}}>
                                    <Text style={{paddingTop:2,paddingLeft:5,paddingBottom:2,paddingRight:5,textAlign:'center'}}>{!this.state.enable?"获取验证码":this.state.codeNumber}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*请输入验证码*/}
                        <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                            <Image source={require('../../images/icon_yzm_zc.png')} style={styles.imgStyles}></Image>
                            <TextInput style={styles.textinputStyles}
                                       placeholder={'请输入验证码'}
                                       placeholderTextColor="#8c8c8c"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(safeNumber)=>{this.setState({safeNumber})}}

                            ></TextInput>

                        </View>
                        {/*请输入密码*/}
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
                        {/*请在输入一次*/}
                        <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                            <Image source={require('../../images/icon_qr_zc.png')} style={styles.imgStyles}></Image>
                            <TextInput style={styles.textinputStyles}
                                       placeholder={'请再输入一次'}
                                       placeholderTextColor="#8c8c8c"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(againPassword)=>{this.setState({againPassword})}}
                                       secureTextEntry={true}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:15,}}>
                        <Text style={{color:'#8c8c8c',fontSize:13}}>注册即表示同意</Text>
                        <Text style={{color:'#778ef2',fontSize:13}}>《健康党平台用户协议》</Text>
                    </View>
                    <View style={{marginTop:40}}>
                        <MyButton buttonText="立即注册"
                                  onClick={this.RegisterEvent.bind(this)}/>
                    </View>

                </View>
                {this.showDialog()}
            </View>
        );
    }

    /**
     * 获取验证码
     */
    getSafeCode(){
        let getCodeURL=Urlheader.URL.header+'api/sms/get-code/';
        let params={
            'mobile_phone':this.state.phoneNumber,
            purpose : 'register'
        }
        if(this.state.phoneNumber)
        {
            if(this.state.phoneNumber.length==11)
            {
                regres=/^1[0-9]{10}$/;
                if(regres.test(this.state.phoneNumber))
                {
                    if(!this.state.enable)
                    {
                        this.Time=setInterval(()=>{
                            if(this.state.codeNumber>0) {
                                this.setState({
                                    codeNumber: this.state.codeNumber - 1,
                                    enable: true,
                                });
                            }else{
                                clearInterval(this.Time);
                                this.setState({
                                    enable:false,
                                });
                            }
                        },1000);
                    }
                    Network.post(getCodeURL,params,(json,isSuccess)=>{
                        if(isSuccess)
                        {
                                alert('获取成功'+json)
                        }else{
                            // alert('获取验证码失败')
                        }
                    })
                }else{
                    alert('您输入的手机号有误')
                }
            }else{
                alert('手机号必须为11位')
            }
        }else{
            alert('请填写手机号')
        }

    }
    /**
     * 检测用户输入的内容是否正确，注册用户
     * @constructor
     */
    RegisterEvent(){
        if(this.state.phoneNumber)
        {
            if(this.state.phoneNumber.length==11)
            {
                regres=/^1[0-9]{10}$/;
                if(regres.test(this.state.phoneNumber))
                {
                    if(this.state.safeNumber)
                    {
                        if(this.state.safeNumber.length==6)
                        {
                            if(this.state.passWord)
                            {
                                if(this.state.againPassword)
                                {
                                    if(this.state.passWord===this.state.againPassword)
                                    {
                                        this.postRegister();
                                    }else{
                                        alert('两次输入密码不一致')
                                    }
                                }else{
                                    alert('第二次输入密码不能为空')
                                }
                            }else{
                                alert('密码不能为空')
                            }
                        }else{
                            alert('验证码不足6位')
                        }
                    }else{
                        alert('验证码不能为空')
                    }
                }else{
                    alert('手机号输入有误')
                }
            }else{
                alert('手机号必须为11位')
            }
        }else{
            alert('手机号为空')
        }

    }
    postRegister(){
        //http://192.168.137.95:8888/api/api-session-id-auth/
        let registerUrl=Urlheader.URL.header+"";
        let params={
            mobile_phone:this.state.phoneNumber,
            code:this.state.safeNumber,
            password:this.state.passWord,
            re_password:this.state.againPassword,
        }
        Network.post(registerUrl,params,(json,isSuccess)=>{
            if(isSuccess)
            {
              //保存token值
            }else{
                //---注册失败原因
            }
        });
        this.setState({
            modalVisible:true,
        })
    }
    content(){
        const innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: 'transparent',}
            : null
        return(
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                <View style={styles.modalStyles}>
                    <ActivityIndicator style={{marginLeft:20,}}
                                       size={'large'}></ActivityIndicator>
                    <Text style={{marginLeft:10,}}>正在注册,请稍后.......</Text>
                </View>
            </View>
        );
    }
}