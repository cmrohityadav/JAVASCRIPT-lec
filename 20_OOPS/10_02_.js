function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne=User("rohit",12,true)
// const userTwo=User("rahul",500,false)

const userOne=new User("rohit",12,true)
const userTwo=new User("rahul",500,false)
console.log(userOne)
console.log(userTwo)
// console.log(userOne.constructor)


/* NOTES
step1 : when we use the new keyword 
it generate the new object instatance

2: copy the all properties and methods

3. inssert into this empty object



*/
