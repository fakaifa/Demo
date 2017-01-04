/**
 * Created by Yongfa on 2016/12/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    NetInfo,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    AsyncStorage,
} from 'react-native';
import HealthyState from './healthyState/healthyState'
import MyMedical from './myMedical/myMedical'
let {width,height}=Dimensions.get('window');
var Swiper = require('react-native-swiper');


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.checkIsLog();
        this.state= {
            currentPage:0,
            isLoginSuccess:false,
        }
    }
    //----判断是否登录成功
    checkIsLog(){
        try {
            AsyncStorage.getItem(
                'Login',
                (error,result)=>{
                    if (error){
                        //---未登录状态
                        alert("---未登录状态"+result)
                        this.setState({
                            currentPage:1,
                            isLoginSuccess:false,
                        });
                    }else{
                        //----登录状态
                        alert("登录状态"+result)
                       this.setState({
                           currentPage:0,
                           isLoginSuccess:true,
                       });
                    }
                }
            )
        }catch(error){
            alert('失败'+error);
        }
        return ;
    }
    //---上面的button按钮
    chooseButton(){
        btnChoseLen=[];
        let borderRadrus=15;
        let btnColorBg,textColor;
        for(let i=0;i<2;i++)
        {
            if(i==this.state.currentPage)
            {
                btnColorBg="#222222";
                textColor="#cdcdce";
            }else {
                btnColorBg="#cdcdce";
                textColor="#222222";
            }
            if(i==0)
                {
                    btnChoseLen.push(
                        <TouchableOpacity
                            key={i}
                            activeOpacity={1}
                            style={[styles.topButtonStyle,{backgroundColor:btnColorBg,borderTopLeftRadius:borderRadrus,borderBottomLeftRadius:borderRadrus}]}
                            onPress={this.chooseEvent.bind(this,0)}>
                            <Text style={[styles.btnTextStyles,{color:textColor}]}>我的体检</Text>
                        </TouchableOpacity>)
            }else
                    {
                        btnChoseLen.push(
                            <TouchableOpacity
                                key={i}
                                activeOpacity={1}
                                style={[styles.topButtonStyle,{backgroundColor:btnColorBg,borderBottomRightRadius:borderRadrus,borderTopRightRadius:borderRadrus}]}
                                onPress={this.chooseEvent.bind(this,1)}>
                                <Text style={[styles.btnTextStyles,{color:textColor}]}>身体状况</Text>
                            </TouchableOpacity>
                        )
            }
        }
        return btnChoseLen;
    }
    render(){
      return(
          <View style={styles.container}>
              {/*顶部的两个按钮  城市选择*/}
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  {/*地区选择*/}
                  <TouchableOpacity>
                      <Text>杭州</Text>
                  </TouchableOpacity>
                  {/*套餐和医院的选择*/}
                  <View style={{width:200,flexDirection:'row',}}>
                      {this.chooseButton()}
                  </View>
                  {/*为了使上面的套餐和医院选择能够居中，*/}
                  <View>
                      <Text>杭州</Text>
                  </View>
              </View>
              {/*套餐和医院相对象的内容展示页面*/}
              <ScrollView
                  ref={(ref)=>this.scrollViewID=ref}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                  horizontal={true}
                  // 当一帧滚动结束
                  onMomentumScrollEnd={(event)=>this.onAnimationEnd(event)}>
                  {this.contentView()}
              </ScrollView>
          </View>
      );
  }
    onAnimationEnd(event){
// 1.计算水平方向偏移量
        var offsetX = event.nativeEvent.contentOffset.x;

        // 2.计算当前页码
        var page = Math.floor(offsetX / width);
        // 3.更新状态机,重新绘制UI
        this.setState({
            currentPage:page
        });
    }
  //-----scrollview的每一个条目
    contentView(){
        let scrollViewLen=[];
        for(let i=0;i<2;i++)
        {
            if(this.state.isLoginSuccess)
            {
                if(i==0)
                {
                    scrollViewLen.push(<MyMedical key={i} />)
                }
               else{
                    scrollViewLen.push(<HealthyState key={i}/>)
                }
            }else{
                if(i==0)
                {
                    scrollViewLen.push(<HealthyState key={i}/>)
                }
                else{
                    scrollViewLen.push(<MyMedical key={i}/>)
                }
            }
        }
        return scrollViewLen;
    }
    //---------按钮点击事件
    chooseEvent(tag){
            let slipDitence;
            if(tag==0) {
                slipDitence =-width;
            }
            if(tag==1)
            {
              slipDitence=width;
             }
            this.scrollViewID.scrollTo({
                x:slipDitence,
                y:0,
                animated: true
            });
            this.setState({
                currentPage:tag
            });
        }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:5,
    },
    topButtonStyle:{
        flex:1,
        alignItems:'center',
    },
    btnTextStyles:{
        fontSize:14,
        padding:5,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
