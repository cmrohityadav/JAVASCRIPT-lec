const name="rohit ";
const repCount=18;
// console.log(name +" yadav "+ repCount ) //this is the not better way
console.log(`hello everyone my name is ${name} and my repo count is ${repCount}`);

const gameName=new String("Pokimon");
console.log(typeof(gameName))
console.log(typeof(name))

console.log(gameName[0]);


console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1))
console.log(gameName.indexOf("o"))


console.log("substring")
const sbString=gameName.substring(0,4); //it ignore the zero means (-2,4)
console.log(sbString);


console.log("slice")
const newString=gameName.slice(-6,4);
console.log(newString);


console.log("trim")
const anotherString="    Rohit    ";
console.log(anotherString);
console.log(anotherString.trim());


console.log("replace")
const url="https://www.rohit.com/index.html%homepage.hmtl";
console.log(url.replace(".html%","-"));


console.log("includes")
console.log(url.includes("rohit"))
console.log(url.includes("yadav"))


console.log("split")
console.log(url.split("."));

