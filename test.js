const promiseFour=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"rohit",password:"123"})
        }else{
            reject("erro something went wrong")
        }

    },1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
   
}).then((username)=>{
    console.log(username)

}).catch(function(msg){
console.log(msg)
}).finally((use1)=>{
    console.log("the promise is either reject or resolved")
    console.log(use1)
})
