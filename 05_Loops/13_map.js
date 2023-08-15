const myNums=[1,2,3,4,5,6,7,8,9,7]

const newNum=myNums.map((num)=> num+10)

// console.log(newNum)



//+++++Chaining+++++++++++++++++++++++++
const arr1=[1,2,3,4,5,6,7,8,9,7]

const valarr=arr1.map((num)=>num*10).map((num)=>num+1)
                .filter((num)=>num>50)


console.log(valarr)

