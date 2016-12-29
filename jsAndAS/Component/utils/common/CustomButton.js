/**
 * Created by Yongfa on 2016/12/29.
 */
/**
 * 自定义的按钮
 */
let borderRadius=10;
import React,{Component} from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
export default class CustomButton extends Component{
    render(){
        return (
            <View style={styles.customButtonViewStyles}>
                <TouchableOpacity  style={styles.customButtonStyles}>
                    <Text style={styles.textStyles}>this.props.text</Text>
                </TouchableOpacity>
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
        width:120,
    },
    textStyles:{
        color:'#cdcdce',
        textAlign:'center'
    }
});