// Immediately Invoked Function Expression

(function chai(){
    console.log(`DB connected`)
})();


(()=>{
    console.log("database 2 connected")

})();


((db)=>{
    console.log(`database 3 connected ${ db}`)

})("mysql")
