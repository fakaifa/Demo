/**
 * Created by Yongfa on 2017/1/3.
 */
import React,{Component}from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
let line=4;
let {width,height}=Dimensions.get("window");
let itemWidth=width*0.2;
let marin=(width-line*itemWidth)/(line+1);
export default  class ContactList extends  Component{
    arr = ['哈哈','嘻嘻','呵呵','呲呲','啦啦','哈哈','呵呵'];
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        if(this.arr.length<10)
        {
            this.arr.push('添加成员');
        }
        this.state={
            dataSource:ds.cloneWithRows(this.arr),
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                {/**导航栏 */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    contentContainerStyle={styles.listViewStyle}
                />
            </View>
        );
    }
    renderRow(rowData,rowId,sectionID){
        return(
            <View style={{width:itemWidth,height:30,backgroundColor:'#f0f',marginLeft:marin,marginTop:10,}}>
                <Text style={{fontSize:18,color:'#00f'}}>{rowData}</Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        listViewStyle:{
            flexWrap:'wrap',
            justifyContent:'flex-start',
            alignItems:'flex-start',
            flexDirection:'row'
        }
}
);