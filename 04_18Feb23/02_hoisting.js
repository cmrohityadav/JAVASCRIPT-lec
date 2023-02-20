function tipper(a){
     let bill =a;
     console.log(bill+5)

}




tipper(5);

taxpayer("1000")

function taxpayer(n){
    let amount=parseInt(n)+200;
    console.log(`total payable Amount is: ${amount}`)
}


//  card(2563) 
 //this will throw error bcz 
//  =>>function declaration are scanned and available
// varaible declaration are scanned and made  undefined
let card=function(z){
    let amount=parseInt(z)+200;
    console.log(`total payable Amount is: ${amount}`)
}
card(2563) //this will run


// varaible declaration are scanned and made  undefined
// console.log(name) //it give undefine
let name="rohit";

