const myNum=[1,2,3,4,5]
const sumArray=(arry)=>{
    let total=0;
    arry.forEach(function(element){
        total+=element;
        
    });
    return total;
}

console.log(sumArray(myNum))