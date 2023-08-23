const promiseFive=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("erro: In JS something went wrong")
        }

    },1000)
})

// async function consumePromiseFive(){
//     const response=await promiseFive;
//     console.log(response)
// }


async function consumePromiseFive(){
    try {
        const response=await promiseFive;
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();