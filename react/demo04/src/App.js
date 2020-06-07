import React,{Component,Fragment} from "react";
//引入App.css
import './App.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue: 'B',
            list:[]
        }
    }

    render() {
        return(
            <Fragment>
                {/*和输入框绑定点击文字就激活文本框即可输入,通过htmlFor和input中的id进行绑定*/}
                <label htmlFor="lsj">添加服务</label>
                {/*React中使用css时使用className不能使用class*/}
                <input id="lsj" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addLi.bind(this)}>添加</button>
                <br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li
                                key={index}
                                onClick={this.delLi.bind(this,index)}
                                // dangerouslySetInnerHTML={{__html:item}} 用于解析输入值为HTML标签
                            >{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    addLi(e){
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }
    delLi(index){
        //先回去list数组赋值给一个变量
        let list = this.state.list;
        //操作这个变量，进行删除指定索引元素
        list.splice(index,1);
        //将操作完的变量重新赋值给原来的数组
        this.setState({
            //...es6语法，数组展开
            list:[...list]
        })
    }
}

export default App

