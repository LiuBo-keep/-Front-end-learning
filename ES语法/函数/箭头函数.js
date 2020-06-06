let show1 = function () {
    console.log("aaa")
};

show1();

let show2 = ()=>{
    console.log("箭头函数")
};

show2()

console.log("*********************************");
//当只有一个参数时可以省略括号
let show3 = a =>{
    console.log(a)
};

show3(12);

console.log("*********************************");
//当有返回值时，并且只有一个return时，可以省略大括号{}和return

let show4 = ()=>  13;

console.log(show4());
