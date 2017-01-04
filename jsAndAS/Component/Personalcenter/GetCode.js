/**
 * Created by Yongfa on 2017/1/3.
 * 获取验证码的方法。
 */
import React,{Component} from 'react'
import {} from 'react-native';
import Network from '../../Component/utils/Network';
const getCode=function getSafeCode(phoneNumber,codeNumbers){
    let getCodeURL=Urlheader+"";
    let params={
        'mobile_phone':this.state.phoneNumber,
        purpose : 'register'
    }
    if(phoneNumber)
    {
        if(phoneNumber.length==11)
        {
            regres=/^1[0-9]{10}$/;
            if(regres.test(phoneNumber))
            {
                Network.post(getCodeURL,params,(json,isSuccess)=>{
                    if(isSuccess)
                    {
                        if(!this.state.enable)
                        {
                            this.Time=setInterval(()=>{
                                if(codeNumbers>0) {
                                    this.setState({
                                        codeNumber: codeNumbers - 1,
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
};
export  default  getCode();