class Rail{
book(){

    console.log(`book-> name : ${this.name} train number : ${this.trainNo}`)
}
cancle(){
    console.log(`cancle-> name : ${this.name} train number : ${this.trainNo}`)
}
fill(name,trainNo){
    this.trainNo=trainNo;
    this.name=name;


}


}

let rohit=new Rail();

rohit.fill("rohit",159);
rohit.book();

rohit.fill("yadav",456);
rohit.book();