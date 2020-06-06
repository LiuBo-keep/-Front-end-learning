//参数的扩展(收集剩余参数)
//当不知道调用者要传递多少参数时，可以使用...args接收(args是一个数组)
//注意：...args必须放在最后用于接收多余参数
function show1(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args)
};

show1(12,25,45,78,56);
console.log("********************************");
//展开数组(展开后的效果，跟直接把数组的内容写在这一样)

let arr1 = [1,2,3];
console.log(...arr1);//1,2,3

let arr2 = [4,5,6];

let arr3=[...arr1,...arr2];
console.log(arr3)

console.log("********************************");
//参数扩展与数组展开一起使用
//先将参数收集到args中
function fun1(...args){
    //在fun2中将参数展开
    fun2(...args)
}
function fun2(a,b){
    console.log(a+b)
}

fun1(12,45);
console.log("********************************");
//默认参数
