function sayHello(){
    console.log("Hello world");
    console.log("Hitesh");
}

function addTwoNum(num1, num2){
    let result = num1 + num2
    return result

}

function subtractTwoNums(num1, num2){
    let result = num1 - num2 
    return result
}

// const result  = addTwoNum(4, 4)
// console.log(result);

// console.log(subtractTwoNums(5, 4));

function registerPWUser(user="Richa"){
    if (!user) {
        return "Please pass the username"
    }
    
    return user + ' is registerd at PW'
}

// console.log(registerPWUser("Hitesh"))


// amazon shopping cart


function cartBillTotal(...numbers){
    //take a variable total
    let total = 0
    // loop all values and keep adding to total
    for(const num of numbers){
        total += num
        // total = total + num
    }
    // return total
    return total
}

const user = {
    id: "123",
    name: "Rishav",
    email: "rishav@pw.live"
}

function addUser(obj){
    console.log(`A user name ${obj.name} got an email ${obj.email}`);
}

// 'hitesh' + variablename
// ""
// `${}`

// addUser(user)

function addTwonumber(num1, num2){
    return num1 + num2
}

const addTwoNumberv2 = (num1, num2) => {
    return num1 + num2
}

const addTwoNUmberv3 = (num1, num2) =>  num1 + num2
const addTwoNUmberv4 = num1  =>  "5"
const addTwoNUmberv5 = num1  =>  ({email: "rohit@pw.live"})
const addTwoNUmberv6 = (num1, num2 ) =>  ({email: "rohit@pw.live"})

function learning(){
    console.log(this)
}

const learningTwo = () => {
    console.log(this);
}

// learning()
// learningTwo()