let arr=[1,2,3,4,5]
arr.map(function(element,index,array){
    console.log(element,index,arr);
})

arr.map((element,index,array) => {
    console.log("using arrow fun",element,index,arr);
});
