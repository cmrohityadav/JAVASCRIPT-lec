const user={
    name:"top name",
    email:"topnames@gmail.com"

}

const teacher={
    makeVideos:true
}

const teacherSupport={

    isAvailablr:false
}
const TeacherAssistant ={
    makeAssignment:"js assignment",
    fulltime:true,
    __proto__:teacherSupport, //old method
}

console.log(TeacherAssistant.isAvailablr)

teacherSupport.__proto__=teacher; //old method
console.log(teacherSupport.makeVideos)




//modern code
console.log(user.makeVideos)
Object.setPrototypeOf(user,teacher)// user me daal do teacher ki property
console.log(user.makeVideos)



// ++++++++++++++++++++++++++++
// true length

String.prototype.truelength=function(){
    console.log(`true length is ${this.trim().length}`)
}
"rohit     ".truelength();
"rohityadav     ".truelength();