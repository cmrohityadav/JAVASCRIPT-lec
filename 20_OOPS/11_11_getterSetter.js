class Employee{
    constructor(name,salary){
        this.name=name
        this._salary=salary
    }
    get salary(){
        return ` You are not allowed to see salary`
    }
    
    set salary(value){
        if(value<0){
            console.error("Invalid salary")
        }else{
            this._salary=value
        }
    }


}

let emp=new Employee("Alice",5000)

console.log(emp._salary)
