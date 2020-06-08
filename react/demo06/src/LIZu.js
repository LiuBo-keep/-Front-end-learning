import React,{Component,Fragment} from "react";
//引入PropTypes组件
import PropTypes from 'prop-types'


//当父组件给子组件传递数据时可以使用PropTypes组件进行数据校验，在类的外面进行校验


class LIZu extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Fragment>
                <li onClick={this.dellii.bind(this)}>{this.props.name}{this.props.content}</li>
            </Fragment>
        )
    }
    dellii(){
        //console.log(this.props.index)
        this.props.delli(this.props.index)
    }
}

//数据校验
LIZu.propTypes={
    //校验父组件传递的内容是否是字符串类型
    content:PropTypes.string,
    //校验父组件传递的内容是否是数字类型
    index:PropTypes.number,
    //校验父组件传递的内容是否是方法
    delli:PropTypes.func
    //delli:PropTypes.func.isRequired:加了isRequired表示这个属性必须传递
};
//在子组件中设置默认值
LIZu.defaultProps={
    name:'哈哈哈'
};

export default LIZu
