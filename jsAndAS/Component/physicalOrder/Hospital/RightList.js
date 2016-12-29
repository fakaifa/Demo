/**
 * Created by Yongfa on 2016/12/29.
 */
import React,{Component} from 'react';
import {
    ListView,
    Text
} from 'react-native'
export  default  class LeftList extends Component{
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
        };
    }
    /**
     * 加载网络数据
     **/
    componentDidMount(){
        let datasAry=[];
        for(let i=0;i<80;i++)
        {
            datasAry.push("---"+i);
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(datasAry)
        });
        return datasAry;
    }
    /**
     * 初始化每个item
     **/
    renderRow(rowData){
        return(
            <Text style={{paddingHorizontal:20,paddingVertical:10,borderBottomColor:'#f0f',borderRadius:20,borderWidth:2}}>{rowData}</Text>
        );
    }
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}>
            </ListView>
        );
    }
}