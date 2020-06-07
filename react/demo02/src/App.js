import React,{Component,Fragment} from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'12545535',
            list: ['A服务','B服务']
        }
    }

    render(){
        return(
            <Fragment>
                手机号<input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/>
               <button onClick={this.btnList.bind(this)}>添加服务</button>
                <br/>
               <ul>
                  {
                       this.state.list.map((item,index)=>{
                        return <li key={index+item}>{item}</li>
                    })
                  }
               </ul>
            </Fragment>
        )
    }

    changeValue(e){
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    btnList(e){
        this.setState({
            //...this.state.list扩展运算符
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
}

export default App