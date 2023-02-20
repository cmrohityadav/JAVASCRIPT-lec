
function getUserRole(name, role) {

    switch (role) {

        case "admin":
            return `${name} is admin with all access`;
            break; //this is not neccessary
        case "subAdmin":
            return `${name} is subadmin with all access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with acces to deltet and create the test `;
            break;
        case "testprep":
            return `${ name } is testprep with acces to deltet and create the test`;
            break;
        case "user":
            return `${name} is a user to consume the content`
        
            default:
                return `${name} is a trial user`;
    }
}



 let result=getUserRole("rohit","user");
 console.log(result);



 //other way to use function
 let getUser=function(name, role) {

    switch (role) {

        case "admin":
            return `${name} is admin with all access`;
            break; //this is not neccessary
        case "subAdmin":
            return `${name} is subadmin with all access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with acces to deltet and create the test `;
            break;
        case "testprep":
            return `${ name } is testprep with acces to deltet and create the test`;
            break;
        case "user":
            return `${name} is a user to consume the content`
        
            default:
                return `${name} is a trial user`;
    }
}
console.log(getUser("rahul","admin"));