let pattern = 'pw'
let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi
const strToCheck = "pw is growing at a rapid spped and recently they are working on pwskills to create skills based pwcontent"

const result=regExThree.test(strToCheck);
console.log(result);


const anotherResult=strToCheck.match(regExThree);
console.log(anotherResult);


const oneMoreResult=strToCheck.replace(regExThree,'p-w');
console.log(oneMoreResult);
