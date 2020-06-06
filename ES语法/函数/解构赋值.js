/*
*  1.左右两边结构必须一样
*  2.右边必须是个东西(一种数据类型)
*  3.声明和赋值不能分开(必须在一句话里完成)
*/

let arr = [1,2,3];

let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a,b,c);

console.log("*******************************");
//上面的操作可以使用下面的方式
let [d,e,f] = [4,5,6];
console.log(d,e,f);

console.log("*******************************");
//使用解构赋值操作json
let {l,k,j}={l: 2, k: 23, j: 12};
console.log(l,k,j);

console.log("*******************************");
//使用解构赋值操作复杂结构
let [{o,p},[h],nubmber,str]=[{o: 45,p: 45},[85],9,"asd"];
console.log(o,p,h,nubmber,str);

console.log("*******************************");
//使用解构赋值操作复杂结构想得到完整的json,数组
let [json,arr5,nubmber1,str1]=[{o: 45,p: 45},[85],9,"asd"];
console.log(json,arr5,nubmber1,str1)
