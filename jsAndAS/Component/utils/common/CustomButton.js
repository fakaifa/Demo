/**
 * Created by Yongfa on 2016/12/29.
 */
/**
 * 自定义的按钮
 */
let borderRadius=18;
import React,{Component} from 'react'
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    View,
} from 'react-native'
export default class CustomButton extends Component{
    render(){
        return (
            <View style={styles.customButtonViewStyles}>
                <TouchableHighlight  style={styles.customButtonStyles} activeOpacity={1}
                                     underlayColor={'#f00'}
                                     onPress={this.props.onPress}>
                    <Text style={styles.textStyles}>{this.props.text}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    customButtonViewStyles:{
        flexDirection:'row',
        justifyContent:'center'
    },
    customButtonStyles:{
        borderRadius:borderRadius,
        backgroundColor:'#222222',
        width:200,
    },
    textStyles:{
        color:'#cdcdce',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:8,
    }
});