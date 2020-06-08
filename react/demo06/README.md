### React之PropTypes校验传递值

在父组件向子组件传递数据时，使用了属性的方式，也就是props，如果在子组件中对父组件传递参数没有
任何的限制。这在工作中时完全不允许的，因为大型项目，如果你不校验，后期会变的异常混乱，业务逻辑也没办法保证。


### PropTypes的简单应用
我们在子组件里传递了4个值，有字符串，有数字，有方法，这些都是可以使用PropTypes限制的。
在使用需要先引入PropTypes。

    import PropTypes from 'prop-types'
  
引入后，就可以在组件的下方进行引用了，需要注意的是子组件的最下面（不是类里边），写入下面的代码：

    XiaojiejieItem.propTypes={
        content:PropTypes.string,
        deleteItem:PropTypes.func,
        index:PropTypes.number
    }    

子组件文件的代码：
    import React, { Component } from 'react'; //imrc
    import PropTypes from 'prop-types'
    
    class XiaojiejieItem  extends Component { //cc
    
       constructor(props){
           super(props)
           this.handleClick=this.handleClick.bind(this)
       }
    
        render() { 
            return ( 
                <div onClick={this.handleClick}>
                    {this.props.content}
                </div>
            );
        }
    
        handleClick(){
    
            this.props.deleteItem(this.props.index)
        }
    
    }
     //--------------主要代码--------start
    XiaojiejieItem.propTypes={
        content:PropTypes.string,
        deleteItem:PropTypes.func,
        index:PropTypes.number
    }
     //--------------主要代码--------end
    export default XiaojiejieItem;
    
这时候你在浏览器中查看效果，是什么都看不出来的，你需要修改一个错误的校验。比如我们把index改为必须是字符串。

    index:PorpTypes.string    
    
这时候浏览器的console里就会报错了，报错信息如下：

     Warning: Failed prop type: Invalid prop `index` of type `number` supplied to `XiaojiejieItem`, expected `string`.
        in XiaojiejieItem (at Xiaojiejie.js:28)
        in Xiaojiejie (at src/index.js:5)    
     
意思就是要求传递字符串，而我们却传递了数字过去，所以给了警告。


### 必传值的校验
使用isRequired关键字了,它表示必须进行传递，如果不传递就报错。

    avname:PropTypes.string.isRequired


### 使用默认值
子组件如果不想使用父组件的数据，则可以在子组件内部定义默认数据，使用defalutProps就可以实现默认值的功能    

     XiaojiejieItem.defaultProps = {
       avname:'李四'
    }    
