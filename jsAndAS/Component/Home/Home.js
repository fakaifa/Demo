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
} from 'react-native';
import HealthyState from './healthyState/healthyState'
import MyMedical from './myMedical/myMedical'
let {width,height}=Dimensions.get('window');
export default class Home extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isdefaultchoseComob: 1,
        };
    }
    /**
     * render渲染图
     * @returns {*}
     */
    render() {
        let letfBtnbgColor;
        let rightBtnbgColor;
        let borderRadrus = 15;
        let letfchooseTextColor;
        if (this.state.isdefaultchoseComob == 1) {
            letfBtnbgColor = "#222222";
            rightBtnbgColor = "#cdcdce"
        } else if (this.state.isdefaultchoseComob == 2) {
            letfBtnbgColor = "#cdcdce";
            rightBtnbgColor = "#222222"
        }

        return (
            <View style={styles.container}>
                {/*顶部的两个按钮  城市选择*/}
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {/*地区选择*/}

                    <TouchableOpacity>
                        <Text>黄豆</Text>
                    </TouchableOpacity>

                    {/*套餐和医院的选择*/}

                    <View style={{width: 200, flexDirection: 'row',}}>

                        {/*套餐按钮*/}
                        <TouchableOpacity activeOpacity={1}
                                          style={[styles.topButtonStyle, {
                                              backgroundColor: letfBtnbgColor,
                                              borderTopLeftRadius: borderRadrus,
                                              borderBottomLeftRadius: borderRadrus
                                          }]}
                                          onPress={this.chooseEvent.bind(this, 1)}>
                            <Text style={[styles.btnTextStyles,{color:(this.state.isdefaultchoseComob==1?"#cdcdce":"#222222")}]}>我的体检</Text>
                        </TouchableOpacity>

                        {/*医院按钮*/}

                        <TouchableOpacity
                            activeOpacity={1}
                            style={[styles.topButtonStyle, {
                                backgroundColor: rightBtnbgColor,
                                borderBottomRightRadius: borderRadrus,
                                borderTopRightRadius: borderRadrus
                            }]}
                            onPress={this.chooseEvent.bind(this, 2)}>
                            <Text style={[styles.btnTextStyles,{color:(this.state.isdefaultchoseComob==1?"#222222":"#cdcdce")}]}>身体状况</Text>
                        </TouchableOpacity>
                    </View>

                    {/*为了使上面的套餐和医院选择能够居中，*/}

                    <View>
                        <Text>杭州</Text>
                    </View>

                </View>

                {/*套餐和医院相对象的内容展示页面*/}
                {this.contentView()}
            </View>
        );
    }

    // 选择套餐和医院的点击事件
    chooseEvent(tag) {
        /**
         * 点击套餐或者医院的时候，要么向左话一个屏幕款，要么向右滑一个屏幕宽
         * @param tag   点击的是套餐还是医院的标志
         * @param  slipDitence  滑动的距离
         */
        let slipDitence;
        if (tag == 1) {
            //---向左滑一个屏幕宽
            slipDitence = -width;

        } else if (tag == 2) {
            //---向右滑一个屏幕宽
            slipDitence = width;
        }
        this.scrollViewID.scrollTo({
            x: slipDitence,
            y: 0,
            animated: true
        });
        /**
         * 改变按钮的颜色
         */
        this.setState({
            isdefaultchoseComob: tag
        });
    }

    /**
     * 当滑动结束的时候调用此方法
     */
    onAnimationEnd(event) {
        // 1.计算水平方向偏移量
        var offsetX = event.nativeEvent.contentOffset.x
        // 2.计算当前页码
        var page = Math.floor(offsetX / width);
        // 3.更新状态机,重新绘制UI
        this.setState({
            isdefaultchoseComob: page + 1
        });
    }

    /**
     * 默认显示为套餐的内容
     * @returns {XML}
     */
    contentView() {
        return (
            <ScrollView
                ref={(ref) => this.scrollViewID = ref}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                horizontal={true}
                // 当一帧滚动结束
                onMomentumScrollEnd={this.onAnimationEnd.bind(this)}>
                <MyMedical/>
                <HealthyState/>
            </ScrollView>
        );
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
    }
});
