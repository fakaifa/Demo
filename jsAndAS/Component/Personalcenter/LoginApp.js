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
    TouchableHighlight
} from 'react-native'
import DialogComponent from '../utils/common/DialogComponent'
import TopView from '../utils/common/TopView'
let {width,height}=Dimensions.get('window');
import Network from '../utils/Network'
import LoginUrl from '../utils/common/Urlheader';
export  default  class LoginApp extends DialogComponent{
    constructor(props)
    {
        super(props)
        this.state = {
             isImagebg:true,
             modalVisible:false,
            phoneNumber:'',
            passWord:'',

        };
    }
    render(){
        return(
            <View style={styles.container}>
                <TopView/>
                <View style={styles.loginStyles}>
                    {/*分上下两部分*/}
                    {/*logo图*/}
                    <View style={styles.logViewStyles}>
                        <Image source={require('../../images/img_logo_dl.png')} style={styles.imgLogStyles}>
                        </Image>
                        <Text style={{fontSize:15,color:'#778ef2',marginTop:10}} onPress={this.onPress.bind(this)}>登录</Text>
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
                    <TouchableOpacity
                        onPress={this.loginEvent.bind(this)}
                        style={{width:244,height:41,borderRadius:20,backgroundColor:'#778ef2',justifyContent:'center',alignItems:'center',marginTop:40}}>
                        <Text style={{color:'#fff',fontSize:15,}}>立即登录</Text>
                    </TouchableOpacity>
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
            alert(tag)
    }
    loginEvent(){
        if(this.state.phoneNumber.length==11)
        {
            let regres=/^1[0-9]{10}$/;
            if(regres.test(this.state.phoneNumber))
            {
                    if(this.state.passWord.length==6)
                    {
                        this.LoginPostInfo();
                    }else{
                        alert('手机号不足6位')
                    }
            }else{
                alert('请输入正确的手机号码')
            }
        }else{
            alert('手机号必须为11位')
        }
    }
    LoginPostInfo(){
        //http://192.168.137.95:8888/api/api-session-id-auth/
       // let loginUrl=LoginUrl.URL.header+""
        let loginUrl="http://192.168.137.95:8888/api/api-session-id-auth/";
        let param={
            username:this.state.phoneNumber,
            password:this.state.passWord,
        }
        Network.post(loginUrl,param,(json,isSuccess)=>{
                if(isSuccess)
                {
                    alert(json)
                }else{
                    alert()
                }
        })
    }
    onPress(){
        this.setState({
            modalVisible:true,
        });
    }
    /**
     *自定义弹出框的内容，此方法会自动又父类调用
     **/
    content(){
        const innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff',}
            : null
        return(
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                {/*标题*/}
                <View style={{borderBottomColor:'#000',borderBottomWidth:1,paddingBottom:20}}>
                    <Text style={{fontSize:16,color:'#000',marginLeft:10,marginTop:20,}}>确定要注销吗？</Text>
                </View>
                {/*按钮选择*/}
                <View style={{flexDirection:'row',alignItems:'center',marginTop:20}} >
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.cancle.bind(this,[false,this.CANCLE_LOGIIN])}>
                        <Text style={styles.buttonText}>确定</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.cancle.bind(this,[false,this.CANCLE_DIOLOG])}>
                        <Text style={styles.buttonText}>取消</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    loginStyles:{
        width:width,
        alignItems:'center',
        justifyContent:'center'
    },
    logViewStyles:{
        alignItems:'center',
    },
    imgLogStyles:{
        height:150,
        width:150,
        marginTop:30,
    },
    phoneNumberStyles:{
        flexDirection:'row',
        width:width*0.75,
        alignItems:'center',
        height:40,
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:'#cdcece'

    },
    imgStyles:{
        width:23,
        height:23,
    },
    textinputStyles:{
        width:width*0.4,
        height:40,
    },
        phoneStyle:{
        width : 0.75 * width*0.9,
        marginLeft : 10,
        fontSize :width<375? 14:16,
        color : 'white',
        height: 40,
    },
    textStyles:{
        fontSize:15,
        color:'#cdcdce'
    }
});