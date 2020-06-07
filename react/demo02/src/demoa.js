import React,{Component,Fragment} from 'react'

class demoa extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue: 'B',
            list:[]
        }
    }

    render(){
        return(
            <Fragment>
                <input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/> 
                <button onClick={this.btnClck.bind(this)}>添加</button>
                <br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    changeValue(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    btnClck(e){
       
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
}

export default demoa