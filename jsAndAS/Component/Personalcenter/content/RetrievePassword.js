/**
 * Created by Yongfa on 2016/12/31.
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
} from 'react-native'
import TopView from '../../utils/common/TopView'
let {width,height}=Dimensions.get('window');
import MyButton from '../../utils/common/MyButton'
import DialogComponet from '../../utils/common/DialogComponent'
import styles from './ComInputStyles'
import Network from '../../utils/Network'
import Urlheader from '../../utils/common/Urlheader';
import  SharedPreferenceUtil from '../../utils/common/SharedPreference'
import ChangePwdSuccess from './ChangePwdSuccess'
export default  class RetrievePassword extends  DialogComponet{
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
        };
    }
    /**
     * 页面的渲染
     */
    render(){
        return(
            <View style={styles.container}>
                <TopView
                isImagebg={false}
                title={'找回密码'}
                isshowLine={true}
                navi={this.props.navigator}/>
                <View style={styles.loginStyles}>
                    {/*分上下两部分*/}
                    {/*logo图*/}
                    <View style={styles.logViewStyles}>
                        <Image source={require('../../../images/img_logo_dl.png')} style={styles.imgLogStyles}>
                        </Image>
                        {/*用户输入的手机号和密码*/}
                        <View style={{width:width*0.4,marginTop:20,alignItems:'center'}}>
                            {/*手机号*/}
                            <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                                <Image source={require('../../../images/icon_sjh_dl.png')} style={styles.imgStyles}></Image>
                                <View style={{height:40}}>
                                    <TextInput style={styles.textinputStyles}
                                               placeholder={'请输入手机号'}
                                               placeholderTextColor="#8c8c8c"
                                               underlineColorAndroid="transparent"
                                               onChangeText={(phoneNumber)=>{this.setState({phoneNumber})}}
                                    ></TextInput>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8} style={{borderRadius:5,borderColor:'#cdcdce',position:'absolute',right:0,borderWidth:1,width:90,}}
                                    onPress={this.getCode.bind(this)}>
                                    <Text style={{paddingTop:2,paddingLeft:5,paddingBottom:2,paddingRight:5,textAlign:'center'}}>{!this.state.enable?"获取验证码":this.state.codeNumber}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*验证码*/}
                        <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                            <Image source={require('../../../images/icon_yzm_zc.png')} style={styles.imgStyles}></Image>
                            <TextInput style={styles.textinputStyles}
                                       placeholder={'请输入验证码'}
                                       placeholderTextColor="#8c8c8c"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(safeNumber)=>{this.setState({safeNumber})}}
                            ></TextInput>

                        </View>
                        {/*请输入密码*/}
                        <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                            <Image source={require('../../../images/icon_qr_zc.png')} style={styles.imgStyles}></Image>
                            <TextInput style={styles.textinputStyles}
                                       placeholder={'请输入密码'}
                                       placeholderTextColor="#8c8c8c"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(passWord)=>{this.setState({passWord})}}
                                       secureTextEntry={true}
                            ></TextInput>
                        </View>
                        {/*请在输入一次密码*/}
                        <View style={[styles.phoneNumberStyles,{backgroundColor:'#fff'}]}>
                            <Image source={require('../../../images/icon_qr_zc.png')} style={styles.imgStyles}></Image>
                            <TextInput style={styles.textinputStyles}
                                       placeholder={'请再输入一次'}
                                       placeholderTextColor="#8c8c8c"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(againPassword)=>{this.setState({againPassword})}}
                                       secureTextEntry={true}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={{marginTop:40}}>
                        <MyButton buttonText="重置密码"
                                  onClick={this.replaceEvent.bind(this)}/>
                    </View>

                </View>
                {this.showDialog()}
            </View>
        );
    }

    /**  获取验证码
     * @param phoneNumber  用户输入的手机号
     */
    getCode(){
        let getCodeURL=Urlheader.URL.header+'api/sms/get-code/';
        let params={
            'mobile_phone':this.state.phoneNumber,
            'purpose' : 'register'
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
                            alert('获取验证码成功')
                        }else{
                            alert('获取验证码失败')
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
     * 重置密码点击事件
     */
    replaceEvent(){
        let replacepassUrl=Urlheader.URL.header+'api/account/rest-password/';
        let params={
            'mobile_phone' :this.state.phoneNumber,
            'code' :this.state.safeNumber,
            'password' : this.state.passWord,
            're_password' : this.state.againPassword
        };
        this.setState({
            modalVisible:true,
        });
        Network.post(replacepassUrl,params,(json,isSuccess)=>{
            if(isSuccess)
            {
                alert('修改成功')
                if(this.props.navigator)
                {
                    this.props.navigator.push({
                        name:ChangePwdSuccess,
                        component:ChangePwdSuccess,
                    })
                }
            }else{
                alert('----error-'+json)
            }
            //---登录等待框消失
            this.setState({
                modalVisible:false,
            });

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
                    <Text style={{marginLeft:10,color:'#FFF'}}>正在重置,请稍后.......</Text>
                </View>
            </View>

        );
    }
}