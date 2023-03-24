undefined
null
0
""
NaN
//  above all consider as the falsy value
let user=undefined;
if(user){
    console.log("excute the code")
}else{
    console.log("hahahaha")
}



// why js is tricky language
console.log(2 + 2)
console.log("2" + 2) //js assume it is a string
console.log(2 + "2")

let admin="2";
if(admin == 2){
    console.log("hi")
}

// now it will check strickly using ===
let admins="2";
if(admins === 2){
    console.log("check")
}

console.log("value of a")
console.log(typeof(admin == 2))
let a=admin == 2;
console.log(a)

console.log("value of e")
let c="rohit";
let d=40;
let e=c==d;
console.log(e)

console.log("value of h")
let f="rahul";
let g="yadav";
let h=f==g;
console.log(h)