
let submit=document.getElementById("submit")
submit.addEventListener("click",myFun);
function myFun(){
    let x=document.getElementById("password").value;
    
    let y=document.getElementById("conpassword").value;
    if(x==y){
        document.getElementById("display").innerText="Match";
        document.getElementById("display").style.backgroundColor='green';
        
        
        
    }
    else{
        document.getElementById("display").innerText=" Not match";
        document.getElementById("display").style.backgroundColor='Red';
    }


}


