let rockBtn = document.querySelector(".rock-btn");
let paperBtn = document.querySelector(".paper-btn");
let scissorBtn = document.querySelector(".scissor-btn");
let val = 0;
let choices = document.querySelectorAll(".game-btn");
let playerMsg = document.querySelector("#player-msg");
let compMsg = document.querySelector("#comp-msg");
let drawMsg = document.querySelector("#draw-msg");
let secondContainer = document.querySelector(".second-container")
let winClass = document.querySelector(".winner-msg");
let winMsg = document.querySelector("#win-msg");
let resetBtn = document.querySelector(".reset");
let resetGame = document.querySelector("#reset-btn");
let playerChoice = document.getElementById('player-choice')
let compChoice = document.getElementById('comp-choice')

let rock = false;
let paper = false;
let scissor = false;
let compVal = 0;
let playerScore = 0;
let compScore = 0;
let draw = 0;
let limit = 10;
let total = 0;
let winner = "";

const getCompVal = () => {
    compVal = Math.floor(Math.random() * 3)
}


const checkWinner = () => {

    

    if(rock){
        playerChoice.innerText = "Rock"
        rock=false;
        if(compVal === 0){
             compChoice.innerText = "Rock"
            draw++;
        }else if(compVal === 1){
            compChoice.innerText = "Paper";
            compScore++;
        }else{
            compChoice.innerText = "Scissors";
            playerScore++;
        }
    }else if(paper){
        playerChoice.innerText = "Paper";
        paper=false;
        if(compVal === 0){
            compChoice.innerText = "Rock";
            playerScore++;
        }else if(compVal === 1){
            compChoice.innerText = "Paper";
            draw++;
        }else{
            compChoice.innerText = "Scissors";
            compScore++;
        }
    }else{
        playerChoice.innerText = "Scissors";
        scissor = false;
        if(compVal === 0){
            compChoice.innerText = "Rock";
            compScore++;
        }else if(compVal === 1){
            compChoice.innerText = "Paper";
            playerScore++;
        }else{
            compChoice.innerText = "Scissors";
            draw++;
        }
        
    }
    total++;
}

let scoreWin = ()=>{
    if(draw >= playerScore && draw>=compScore){
        winner = "None (Draw)"
    }else if(playerScore > compScore){
        winner = "Player"
    }else if(compScore > playerScore){
        winner = "Computer"
    }else {
        winner = "None (Draw)"
    }
}

 

choices.forEach( (choice)=> {
    
    choice.addEventListener(("click"), () => {
        getCompVal();
        val = choice.getAttribute("value");
        if(val === 0){
            rock = true;
        }else if(val === 1){
            paper = true;
        }else{
            scissor = true;
        }
        

        checkWinner();

        playerMsg.innerText = playerScore;
        compMsg.innerText = compScore;
        drawMsg.innerText = draw;
        if(total === limit){
            
            scoreWin();
            console.log("limit reached")
            secondContainer.classList.add("hide");
            winMsg.innerText = winner;
            
            winClass.classList.remove("hide");
            resetBtn.classList.remove("hide");
        }

    }) 

})


resetGame.addEventListener(("click"), () => {
rock = false;
paper = false;
scissor = false;
compVal = 0;
playerScore = 0;
compScore = 0;
draw = 0;
total = 0;
winner = "";
playerMsg.innerText = playerScore;
compMsg.innerText = compScore;
drawMsg.innerText = draw;
secondContainer.classList.remove("hide");
winClass.classList.add("hide");
resetBtn.classList.add("hide");
})





