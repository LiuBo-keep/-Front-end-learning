/*
 * Json
 *  1.Json对象
 *  2.简写
 *  3.方法
 *     - JSON.stringify(Json对象);将Json对象转换为字符串
 *     - JSON.pares(字符串)；将字符串转换为Json对象
 *  4.json的标准写法
 *     -如果属性值想用引号包起来必须使用双号
 *     -所有的名字都必须使用双引号包起来
 *     {a: 1,b: 3}  错误：名字没有使用双引号包起来
 *     {"a": 1,"b": 3} 正确
 *     {"a": '1',"b": 3} 错误：属性值应该使用双引号包起来
 *     {"a": "1","b": 3} 正确
 */

//将Json对象转换为字符串
let json = {"a": 1,"b": 3};
console.log(json);
console.log(JSON.stringify(json));
console.log("*****************************************");
//将字符串转换为Json对象
let str = '{"a": 1,"b": 2}';
console.log(str);
console.log(JSON.parse(str));

console.log("*****************************************");
//json简写(名字和值一样的时候，名字可以省略)
let json1 = {"a": a,"b": b,"c": 12};
let json2 = {a,b,"c": 12};
