//类的继承

//User类
class User {
    //构造器，初始化参数
    constructor(name,password){
        this.name=name;
        this.password=password;
    }

    //方法1
    showName(){
        console.log(this.name)
    }
    //方法2
    showPassword(){
        console.log(this.password)
    }
}

//VIPUser类(user类的基础上添加等级)
class VipUser extends User{
    //子类构造器
    constructor(name,pass,level){
        //调用父类构造器进行父类初始化
        super(name,pass);
        //子类新增属性
        this.level =level;
    }

    showLevel(){
        console.log(this.level)
    }
}

let vipUser=new VipUser("lisi","456",8);
vipUser.showName();
vipUser.showPassword();
vipUser.showLevel();

