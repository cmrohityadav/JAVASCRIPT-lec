
async function getAllUsers(){
   try{
    const response= await fetch('https://api.github.com/users/cmrohityadav')
    console.log(response)
    // const data=response.json();
    // console.log(data)

   }catch(error){
    console.log("error is",error)

   }
}
getAllUsers()