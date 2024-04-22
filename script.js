
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".circle");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper, scissor
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}

const playGame = (userChoice) =>{
    //Generate computer choice
    const compChoice = genCompChoice();

if(userChoice === compChoice){
    //draw game
    drawGame(); 
}
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //scissor,rock
            userWin = compChoice === "scissors" ? false : true ;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
     showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((circle) =>{
    circle.addEventListener("click", () =>{
        const userChoice = circle.getAttribute("id");
        playGame(userChoice);
    });
});