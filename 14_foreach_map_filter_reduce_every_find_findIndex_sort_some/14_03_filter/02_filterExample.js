const actor=["doga","dhruvaraj","alluRaj","rahul","rohitraj"]
console.log(actor);
const actorWithRaj=actor.filter((ele)=>{
    return ele.endsWith("raj");
});

console.log(actorWithRaj);