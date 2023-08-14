

const lang=["c++","js","c#"]

lang.forEach(function (val){
    // console.log(val)
})

lang.forEach((item)=>{
    //  console.log(item)
})



function printMe(item){
    console.log(item)
}

// lang.forEach(printMe)  //just give it reference

lang.forEach( (item,index,arr)=>{
    // console.log(item,index,arr)
})


const contact=[
    {
        name:"rohit",
        age:"24",
        sr:"01"
    },
    {
        name:"manish",
        age:"23",
        sr:"02"
    },
    {
        name:"rahul",
        age:"25",
        sr:"03"
    }
]

contact.forEach((item)=>{
    console.log(item.name)
})