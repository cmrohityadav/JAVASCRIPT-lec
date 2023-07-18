// switch (key) {
//   case value1:
//     //Statements executed when the
//     //result of expression matches value1
//     break;
//   case value2:
//     //Statements executed when the
//     //result of expression matches value2
//     break;

//   case valueN:
//     //Statements executed when the
//     //result of expression matches valueN
//     break
//   default:
//     //Statements executed when none of
//     //the values match the value of the expression
//     break;
// }


// example1
console.log("example 1")
let user = "Admin";
switch (user) {
  case "Admin":
    console.log("He is Admin");
    break;

  case "Student":
    console.log("He is Student");
    break;

  case "Mentor":
    console.log("He is Mentor");
    break;
  default:
    console.log("I am Default");
}

// example 2
console.log("example 2")
let users="tutorr";
switch (users) {
  case "admin":
    console.log("Y r admin")
    
    break;
  case "subadmin":
    console.log("Controlller");
    break;
  case "tutor":
    console.log("You are teacher can edit or post the test")
    break;
  case "user":
    console.log("You are the user only access the courses only")
    break;

  default:
    console.log("try correct")
    break;
}