function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne=new User("rohit",12,true)
const userTwo=new User("rahul",500,false)
console.log(userTwo)
console.log(userOne)
console.log(userOne.constructor)
/* 


*/
