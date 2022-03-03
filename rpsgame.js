function computerPlay () {
    let myChar = ["rock","paper","scissor"];
    let rndind = Math.floor(Math.random() * 3);
    return (myChar[rndind]);
}
let result = [0,0];
function playRound (playerSelection, computerSelection) {
    if (playerSelection ==  computerSelection) {
        alert("Drawn!")
    }else if ( (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissor")){
        result = result.map(function (num, indx) {
            return num + [1,0][indx];
        });
        alert("You Win!");
    }else{
        result = result.map(function (num, indx) {
            return num + [0,1][indx];
        });
        alert("You Lose!");
    }
    console.log(result);
    console.log(playerSelection);
    console.log(computerSelection);
    return result;
}
function game(){
    let winner = [];
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Select!");
        winner = playRound (playerSelection, computerSelection);
    }
        if (winner[0]<winner[1]){
            alert("You are LOSER!");
        }else if(winner[0] === winner[1]){
            alert("WTF!");
        }else {
            alert("You are WINNER!");
        } 
}
console.log(game());

