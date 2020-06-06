//filter      过滤器  指定条件根据条件对数组内数据进行过滤

/*
 *  通过true/false决定数组是否保留(和java中的拦截器有点相似true放行，false不放行)
 */

let arr = [12,5,8,99,27,36,75];

//计算可以被3整除的数值(结合箭头函数)
let  result = arr.filter((item)=>{
    if (item%3==0){
        return true   //放行
    }else {
        return false  //不放行
    }
});

console.log(result);

