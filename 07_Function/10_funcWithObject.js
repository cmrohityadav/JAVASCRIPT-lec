const user={
    username:"Rohit",
    location:"mumbai"
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and location is ${anyObject.location}`)
}

handleObject(user);
handleObject({
    username:"Rahul",
    location: "Jaunpur"
});