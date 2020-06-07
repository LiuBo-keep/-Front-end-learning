/*
 *面向对象:
 *   1.class关键字
 *   2.专门的类构造器
 *   3.class里面直接加方法
 *   4.类的继承extends
 */


//原来的面向对象
 function  User1(username,password) {
     this.username=username;
     this.password=password;
 }

 User1.prototype.showName=function () {
     console.log(this.username);
 };
User1.prototype.showPassword=function () {
    console.log(this.password)
};

let user=new User1('lisi','123');

user.showName();
user.showPassword();
console.log("***********************************");
//ES6中的面向对象
class User2 {
    //构造器
    constructor(name,password){
        this.name=name;
        this.password=password;
    }

    //方法
    showName(){
        console.log(this.name)
    }
    showPassword(){
        console.log(this.password)
    }
}

let user2=new User2("lisi","123");
user2.showName();
user2.showPassword();
