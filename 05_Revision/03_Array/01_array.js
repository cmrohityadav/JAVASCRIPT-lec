let arry=[1,2,6,"rohit",false];
console.log(arry)
console.log(`thw lenght of the array: ${arry.length}`)
console.log(arry[arry.length-1]);
arry[3]="Rohit Yadav";
console.log(arry);
for(let i=0;i<arry.length;i++){
    if(arry[i]==6){
        console.log(i);
    }
}

arry.push("kiran")
console.log(arry);