//字符串模板

//字符串的表示方式
let a = '';
let b = "";

//字符串新的表示法,在字符串模板中使用
let c = ``;

//字符串模板简单使用(将变量number插入字符串str中)
let number = 12;
//${}在字符串模板中表示将什么插入字符串
let str = `ab${number}c`;
console.log(str); //ab12c

console.log("**********************************************");
//将变量插入到HTML中
let title = '标题';
let content = '内容';
//原来的方式
 let str = '<div>'+
     '<h1>'+title+'</h1>'+
     '<p>'+content+'</p>'+
     '</div>';

//使用字符串模板
let str1 = `<div>
              <h1>${title}</h1>
              <p>${content}</p>
           </div>`;
