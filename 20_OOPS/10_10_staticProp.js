class User{

    constructor(username){
        this.username=username;
    }



    logME(){
        console.log(`user name : ${this.username}`)
    }

   static createId(){

        return `123`
    }
}


const rohit=new User("Rahul")
// console.log(rohit.createId())

class Teacher extends User{

    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","i@uphone.com")
iphone.logME()