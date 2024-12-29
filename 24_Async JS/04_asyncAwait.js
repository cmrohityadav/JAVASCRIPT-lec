function fetchUserData() {

    return new Promise((success, fail) => {
        setTimeout(() => {
           

            let bSuccess=true
            if(bSuccess){
                success({ name: "Rohit", url: "https://rohit.com" })

            }else{
                
                fail("Error fetching data From Promise")
            }
        }, 4000)
    })
}


// fetchUserData()
// .then()
// .catch()

async function getUserData(){
    try {
        console.log("fetching user data....")
      const userData=  await fetchUserData() //it always compulsory use async if u use await
      console.log("User data fetched successfully")
      console.log("user Data : ",userData)

        
    } catch (error) {
        console.log("Error fetching data : ",error)
    }
}

getUserData();
console.log("getUserData  function called and it fetching still.....")
