const user={
    username:"Rohit",
    loginCount:5,
    signedIn:true,

    getUserDetails: function(){
        // console.log("got user  detail from databases")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }
}


console.log(user.username);
console.log(user.getUserDetails())
console.log(this)