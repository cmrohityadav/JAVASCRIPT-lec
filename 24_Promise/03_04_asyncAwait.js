
async function getAllUsers(){
   try{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
   //  console.log(response)
    const data= await response.json();
    console.log(data)

   }catch(error){
    console.log("error is",error)

   }
}
// getAllUsers()


fetch('https://api.github.com/users/cmrohityadav')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
