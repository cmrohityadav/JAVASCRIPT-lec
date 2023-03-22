try{
    let x=undefined;
    console.log(x[0])

}catch (errorKyaHai){
console.log("error handling in catch")
console.log("printing error => ",errorKyaHai)
}finally{
 console.log("finally always get executed")
}