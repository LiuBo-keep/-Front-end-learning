import React,{Component,Fragment} from "react";
import LiZu from "./LiZu";

//父组件给子组件传值可以使用属性传值的方法，即属性={要传递的内容(参数/方法)}

class App extends Component{
    constructor(props){
        super(props)
        this.state=({
            inputValue: 'A',
            list: []
        })
    }

    render() {
        return(
           <Fragment>
               <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
               <button onClick={this.btnClick.bind(this)}>点击</button>
               <ul>
                   {
                       this.state.list.map((item,index)=>{
                           //return一句不用()，return多久将返回的东西放在()中
                           return (
                               <div>
                                   {/*父组件给子组件传值：可以使用属性传值*/}
                                   <LiZu
                                       key={index}
                                       content={item}
                                       index={index}
                                       delli={this.delli.bind(this)}
                                   />
                               </div>
                           )
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
    btnClick(e){
        this.setState({
            list: [...this.state.list,this.state.inputValue]
        })
    }
    delli(index){
        let list = this.state.list;
        list.splice(index,1)
        this.setState({
            list:[...list]
        })
    }
}

export default App
