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
let itemHeight=70;
let datasAry=[];
export  default  class LeftList extends Component{
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            isdefaultClick:0,
        };
    }
    /**
     * 加载网络数据
     **/
    componentDidMount(){
        datasAry.push('瓜丝儿');
        datasAry.push('山鸡丁儿');
        datasAry.push('拌海蜇');
        datasAry.push('龙须菜');
        datasAry.push('炝冬笋');
        datasAry.push('玉兰片');
        datasAry.push('浇鸳鸯');
        datasAry.push('烧鱼头');
        datasAry.push('烧槟子');
        datasAry.push('小炒螃蟹');
        datasAry.push('炸面筋');
        // 瓜丝儿、山鸡丁儿、拌海蜇、龙须菜、炝冬笋、玉兰片、浇鸳鸯、烧鱼头、烧槟子、烧百合、
        // 炸豆腐、炸面筋、糖熘 儿、拔丝山药、糖焖莲子、酿山药、杏仁酪、小炒螃蟹、氽大甲、什锦葛仙米、蛤蟆鱼、扒带鱼、海鲫鱼、黄花鱼、扒海参、
        // 扒燕窝、扒鸡腿儿、扒鸡块儿、扒肉、扒面筋、扒三样儿、油泼肉、酱泼肉、炒虾黄儿、熘蟹黄儿、
        // 炒子蟹、佛手海参、炒芡子米、奶汤、翅子汤、三丝汤、熏斑鸠、卤斑鸠、海白米、烩腰丁儿
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(datasAry)
        });
        return datasAry;
    }
    /**
     * 初始化每个item
     **/
    renderRow(rowData, sectionID, rowID){
        let itembgc;
        if(this.state.isdefaultClick==rowID)
        {
            itembgc="#f00"
        }else{
            itembgc="#fff"
        }

        return(
            <Text style={{paddingHorizontal:20,paddingVertical:10,
                borderRadius:20,borderWidth:2,
                backgroundColor:itembgc,
                borderColor:'#f0f',
                height:itemHeight}}
            onPress={this.rightClick.bind(this,rowID,rowData)}>{rowData}</Text>
        );
    }
    /**
     * 右边的listview滑动的时候，左边的listview做出相应的变化
     * @param num
     * @constructor
     */
    PointLine(name)
    {
        // let distence= num/18*itemHeight;
        // this.leftListViewID.scrollTo({x:0,y:distence,animated:true,})
        //---根据传过来的name，遍历数据源，
        for(let n=0;n<datasAry.length;n++)
        {
            if(datasAry[n].indexOf(name)!=-1)
            {
                let heightDisence=n*itemHeight;
                this.leftListViewID.scrollTo({x:0,y:heightDisence,animated:true})
                return ;
            }
        }
    }

    /**
     * 点击左边listview的item，右边的listview做出相应的变化
     * @param item
     */
    rightClick(item,rowData){
        /**
         * 这里面主要实现的有两个  1  改变点击item的颜色，2，右边的listview指向指定的位置
         */
        // this.setState({
        //     isdefaultClick:item,
        // });
        // alert(this.state.isdefaultClick)
        if(this.props.rightList)
        {
            this.props.rightList.toast(item,rowData);

        }else{
            alert('右边的listview---为空');
        }
    }
    render(){
        return(
            <ListView
                ref={(ref)=>this.leftListViewID=ref}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}>
            </ListView>
        );
    }
}