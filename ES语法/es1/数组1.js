/*
 * 数组的4个重要的方法：
 * 1.map         映射
 * 2.reduce      汇总
 * 3.filter      过滤器
 * 4.foreach     循环
 */


//map（一个对应一个）
let arr = [56,86,12,89,55,68];
//map的参数是一个函数这个函数的参数可以自定义，数组中的每一个元素都会经过这个函数并且用自定义的函数参数表示
arr.map(function (itme) {
    console.log(itme);
});
console.log("************************");
//也可以有返回值
let newarr=arr.map(function (itme) {
    return itme
});
console.log(newarr)
console.log("************************");
/*
 * 比如：一个数组[56,86,12,89,55,68]
 *    通过map方法可以得到[不及格，及格，不及格，及格，不及格，及格]
 *  结合箭头函数
 */
let relet=arr.map((item)=>{
    //将数组中每一个经过map参数中的函数时，对每一个进行判断返回相应的值
    if (item>60){
        return'及格'
    }else {
        return '不及格'
    }
});

console.log(relet);


