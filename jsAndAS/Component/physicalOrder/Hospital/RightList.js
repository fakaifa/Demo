/**
 * Created by Yongfa on 2016/12/29.
 */
import React,{Component} from 'react';
import {
    ListView,
    Text,
    Dimensions,
} from 'react-native'
let {width,height}=Dimensions.get('window');
let itemHeight=35;
let datasAry=[];
export  default  class RightList extends Component{
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

        for(let i=0;i<10;i++)
        {
            if(i==0)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('瓜丝儿');
                }
            }if(i==1)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('山鸡丁儿');
                }
            }
            if(i==2)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('拌海蜇');
                }
            }
            if(i==3)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('龙须菜');
                }
            }
            if(i==4)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('炝冬笋');
                }
            }
            if(i==5)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('玉兰片');
                }
            }
            if(i==6)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('浇鸳鸯');
                }
            }
            if(i==7)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('烧鱼头');
                }
            }
            if(i==8)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('烧槟子');
                }
            }
            if(i==9)
            {
                for(let z=0;z<5;z++)
                {
                    datasAry.push('小炒螃蟹');
                }
            }
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(datasAry)
        });
        return datasAry;
    }
    toast(itemNumber,leftItemContent){
        for(let i=0;i<datasAry.length;i++)
        {
            if(datasAry[i].indexOf(leftItemContent)!=-1)
            {
                let heightDisence=i*(itemHeight+2);
                this.rightListViewID.scrollTo({x:0,y:heightDisence,animated:true})
                return;
            }
        }
    }
    /**
     * 初始化每个item
     **/
    renderRow(rowData){
        return(
            // <Text style={{paddingHorizontal:20,borderBottomColor:'#f0f',borderRadius:20,borderWidth:2,height:itemHeight}}>{rowData}</Text>
            <Text style={{flex:1,borderBottomWidth:2,borderBottomColor:'#cdcece'}}>{rowData}</Text>
        );
    }
    render(){
        return(
            <ListView
                ref={(ref)=>this.rightListViewID=ref}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                onMomentumScrollEnd={(event)=>this.onAnimationEnd(event)}>
            </ListView>
        );
    }
    onAnimationEnd(event){
        // 1.计算水平方向偏移量
        let offsetY= event.nativeEvent.contentOffset.y;

        // 2.计算当前页码
        let item=parseInt(offsetY/itemHeight);
        let name=datasAry[item];
        this.props.leftList.PointLine(name);
    }
}