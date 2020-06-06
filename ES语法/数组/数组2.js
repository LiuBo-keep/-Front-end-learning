//reduce      汇总   一堆出来一个
/*
 *  算总数，算平均数，
 */

//算总和
let arr = [12,69,180,8763];
let result = arr.reduce(function (tmp,item,index) {//tmp：中间值；item:数组中的每个数字；index：索引(item的当前索引)
    console.log(tmp,item,index);
    return tmp+item;
});
console.log(result);
console.log("*******************************")
//算平均值(结合牵头函数
result = arr .reduce((tmp,item,index)=>{
    if (index!=arr.length-1){  //判断当前位置是否是最后一次
        return tmp+item
    }else {                    //最后一次
        return (tmp+item)/arr.length
    }
});

console.log(result);
