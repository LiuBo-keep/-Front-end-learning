import React,{Component,Fragment} from "react";
import LIZu from "./LIZu";

class App extends Component{
    constructor(props){
        super(props)
        this.state={
             inputValue: 'A服务',
             list: []
        }
    }

    render() {
        return(
            <Fragment>
                <label htmlFor="aaa">添加服务</label>
                <input id="aaa" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.inputClick.bind(this)}>添加服务</button>
                <br/>
                <ul>
                {/* 变量list数组  */}
                    {
                        this.state.list.map((item,index)=>{
                            return <LIZu
                                key={index}
                                content={item}
                                index={index}
                               //将delli方法传递给子组件
                                delli={this.delli.bind(this)}
                            />
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    //双向数据绑定
    inputChange(e){
        //console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }
    //点击事件，更新list数组
    inputClick(){
        this.setState({
            list: [...this.state.list,this.state.inputValue]
        })
    }
    //点击事件，删除指定li
    delli(index){
        let list=this.state.list;
        list.splice(index,1)
        this.setState({
            list:[...list]
        })
    }
}

export default App
