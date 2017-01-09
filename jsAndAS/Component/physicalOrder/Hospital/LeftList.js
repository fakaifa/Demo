/**
 * Created by Yongfa on 2016/12/29.
 */
import React,{Component} from 'react';
import {
    ListView,
    Text,
    Dimensions,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native'
let {width,height}=Dimensions.get('window');
let itemHeight=35;
let datasAry=[];
export  default  class LeftList extends Component{
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.getdata();
        this.state = {
            dataSource: ds,
            isdefaultClick:0,
            marginbottom:0,
            position:0,
            isShow:true,
        };
    }
    getdata(){
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
        return datasAry;
    }
    /**
     * 初始化每个item
     **/
    renderRow(detail,position){
        return(
        <View style={{flexDirection:'row',width:width*0.3,height:itemHeight,
            borderBottomWidth:2,borderBottomColor:'#cdcece',
            justifyContent:'space-between',alignItems:'center',}}
            key={position}>
            <View style={{width:4,height:itemHeight-4,backgroundColor:'#fff',marginRight:0}}></View>
            <TouchableOpacity onPress={this.rightClick.bind(this,position,detail)}>
                <Text >{detail}</Text>
            </TouchableOpacity>
            {this.indiectorRightLine(position)}
        </View>
        );
    }
    /**
     * 左边listview每个条目别点击的时候，显示的指示器
     */
    indiectorRightLine(position){
        if(this.state.isdefaultClick==position)
        {
            return(
                <View style={{width:4,height:itemHeight-4,backgroundColor:'#888888'}}></View>
            );
        }
            return(
                <View style={{width:4,height:itemHeight,backgroundColor:'#fff'}}></View>
            );
    }
    /**
     * 右边的listview滑动的时候，左边的listview做出相应的变化
     * @param num
     * @constructor
     */
    PointLine(name)
    {
        //---根据传过来的name，遍历数据源，
        for(let n=0;n<datasAry.length;n++)
        {
            if(datasAry[n].indexOf(name)!=-1)
            {
                let heightDisence=n*itemHeight;
                // this.leftListViewID.scrollTo({x:0,y:heightDisence,animated:true})
                this.setState({
                    isdefaultClick:n,
                });
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
         * 这里面主要实现的有两个  1  改变点击item的指示器，2，右边的listview指向指定的位置
         */
        //---左边listview的状态的改变
        this.setState({
            isdefaultClick:item,
        });
        //-----右边listview的变化（移动到最上面）
        if(this.props.rightList)
        {
            this.props.rightList.toast(item,rowData);

        }else{
            alert('右边的listview---为空');
        }
    }
    render(){
        return(
            <ScrollView
                ref={(ref)=>this.leftListViewID=ref}>
                { datasAry.map((item,i)=>this.renderRow(item,i))}
            </ScrollView>
        );
    }


}