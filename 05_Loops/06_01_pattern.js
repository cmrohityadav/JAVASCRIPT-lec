let num=5;
//row printing
for(let row=1;row<=num ;row++){

    let str="";


    //coloum printing
    for(let col=1;col<=num ;col++){

        str+="*";
    }

    console.log(str);
}


/*string concatanation always create new string and doesnt update old
 string
 Reason: In js string are immutable (cannot modify themself)

*/