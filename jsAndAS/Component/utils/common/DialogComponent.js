/**
 * Created by Yongfa on 2016/12/29.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Modal,
    Switch,
    Platform,
} from 'react-native';
import TopView from '../../utils/common/TopView'
export default class Dialog extends Component {
    constructor(props){
        super(props);
        this.CANCLE_LOGIIN="0X00",
        this.CANCLE_DIOLOG="0X11",
        this.state={
            animationType: "fade",
            modalVisible: false,
            transparent: true,
        };
    }
    _setModalVisible(visible) {
        if(Platform.OS==="android")
        {
            this.setState({modalVisible: visible});
        }
    }
    //-----确定注销
    cancle(tag){
        //----根据参数tag判断点击的确定注销还是取消弹出框，不管取消弹出框还是确定取消弹出框都要消失。
        let isSHow=tag[0];
        let isCancle=tag[1];
        this.setState({modalVisible: isSHow});
        switch(isCancle)
        {
            case this.CANCLE_LOGIIN:
                alert(this.CANCLE_LOGIIN+'确定注销------');
                break;
            case this.CANCLE_DIOLOG:
                alert(this.CANCLE_DIOLOG+'取消对话框');
                this.setState({
                    modalVisible:false,
                });
                break;
        }
    }
    showDialog(){
        const modalBackgroundStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        };
        return (
            <View >
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}>
                    <View style={[styles.container, modalBackgroundStyle]}>
                        {/*弹出框显示的内容*/}
                        {this.content()}
                    </View>
                </Modal>
            </View>);
        };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height:80,
        paddingHorizontal:30
    },
    innerContainer: {
        borderRadius: 10,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.5)'
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 15,
        color:'#fff'
    },
    modalButton: {
        marginTop: 10,
    },
    buttonStyles:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#5ecece',
        alignItems:'center',
        marginBottom:10,
        marginTop:20,
        paddingVertical:8,
        borderRadius:5,
    }
});
