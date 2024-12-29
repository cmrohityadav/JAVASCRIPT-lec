//Data/Promise creation
function fetchData() {
    return new Promise((resolve, reject) => {
        //simulating like DB,server call,etc which take time
        setTimeout(()=>{
            let success=true
            if(success){
                //resolve :: if sucess
                resolve("data fetched successfully ")//send any data here
            }else{
                //reject :: if fail
                reject("Error fetching data")//send any data here
            }
        },3000)
    })
}

// Consume of data/Promise
let response =fetchData()
console.log(response)

//above code state pending

fetchData()
.then((data)=>{console.log(data)})//here resolve
.catch((error)=>{console.log(error)})//here reject part 


//chaining
fetchData()
.then((data)=>{
    return `This is ${data.toUpperCase()} chaining`
})
.then((anyvalue)=>console.log(anyvalue))
.catch((anyErr)=>console.log(anyErr))
