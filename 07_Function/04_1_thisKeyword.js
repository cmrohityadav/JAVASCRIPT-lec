const user={

    username:"rohit",
    price:100,
    welcomeMsg: function (){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
 
}

// user.welcomeMsg()
// console.log(this)


//++++++++++++++++++++++++++++++++++++
function chai(){
    let username="rohit";
    // console.log(this)
    console.log(this.username)
}
// chai(); 
// op : undefined


// ++++++++++++++

const pani=function(){
    let username="rohit";
    // console.log(this)
    console.log(this.username)
}
// pani() 
// op : undefined


// ++++++++++++++++++++++++
const arrow=()=>{
    let username="rohit";
    // console.log(this)
    console.log(this.username)
}
arrow()
// op : undefined




