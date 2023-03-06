const gameScore=[100,200,300,400];
//check if all values are number
const gameScoreCheck=gameScore.every((v)=> typeof v==='number')
console.log(gameScoreCheck)