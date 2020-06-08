import React,{Component} from "react";

//重点
//子组件不能直接操作符组件中的内容
//但可以调用父组件中的方法，需要父组件通过属性传值的方式传递给子组件，子组件再使用this.props.属性使用父组件
//传递的值或方法

class LiZu extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    render() {
        return(
            //子组件可以直接使用this.props.属性使用父组件传递的值
            <li onClick={this.handleClick}>{this.props.content}</li>
        )
    }
    handleClick(){
        //console.log(this.props.index)
        //使用父组件传递的方法
        this.props.delli(this.props.index)
    }
}

export default LiZu
