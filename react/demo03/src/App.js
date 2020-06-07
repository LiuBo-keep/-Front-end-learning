import React,{Component,Fragment} from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'123',
            list:['A']
        }
    }

    render() {
        return(
           <Fragment>
               <input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/>
               <button onClick={this.btnClick.bind(this)}>添加服务</button>

               <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return <li key={index}  onClick={this.liClick.bind(this,index)}>{item}</li>
                       })
                   }
               </ul>
           </Fragment>
        )
    }

    liClick(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }

    btnClick(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }

    changeValue(e){
        this.setState({
            inputValue:e.target.value
            }
        )
    }
}

export default App
