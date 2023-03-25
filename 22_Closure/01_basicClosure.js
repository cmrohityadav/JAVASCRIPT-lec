let score=4;
function one(){
    let score=0;
    console.log(score)
}


function two(){
    let score=3;
    console.log(score)
}

function three(){
    
    console.log(score)
}



// one();
// two();
// three();
// console.log(score)

// +++++++++++++++++++++++++++++++++++++
function outerFun(){
    let outerVar="I am at scope level 1";
    function innerFun(){
        let innerVar="I am at scope level 2";
        console.log(outerVar)
    }
    console.log(innerVar);
    innerFun();
}

// outerFun();

//+++++++++++++++++++++++++++++++++++++++++++++++++
// Closure

function superFun(){
    let outerValue="I am Outer";

    function minorFun(){
        console.log(outerValue)
        //upar wali  values ko yeh function access kr skta hai isko hi closure kahte hai
    }
    minorFun();
}
// superFun();

// Examples++++++++++++++++++++++++++
const errorMsg="file not found"
setTimeout(function callback(){
    console.log(errorMsg)
},3000)




