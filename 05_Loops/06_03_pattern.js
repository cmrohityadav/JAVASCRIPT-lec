let num=5;

for(let row=1;row<=num;row++){
    let str="";
    let space=num-row;
    for(let col=1;col<=space;col++){

        str+=" ";
    }
    let start=row;
    for(let col=1;col<=start;col++){
        str+="*";
    }
    console.log(str)
}


