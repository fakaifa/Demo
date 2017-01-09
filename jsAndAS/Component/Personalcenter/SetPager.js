/**
 * Created by Yongfa on 2017/1/9.
 */
import React,{Component} from 'react'
import {
    Dimensions,
    Platform,
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native'
let {width,height}=Dimensions.get('window');
export default  class SetPager extends Component{
    render(){
        return(
            <View>
                <Text>设置</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },

});