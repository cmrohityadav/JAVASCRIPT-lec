let arr=[1,2,3,4];
arr.forEach(function(element,index,arr){
    console.log(element,index,arr)
});

arr.forEach((element,index,arr)=>{
    console.log("arrow fun:",element,index,arr)
})
