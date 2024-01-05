
//Create rock, paper scissors
const GAME_OPTIONS = ["rock", "paper", "scissors"];
// user input: what that input win
const RULES = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock"
}
/**
 * Get the user input and check if the selection is valid, if not the prompt appear again
 * @returns the selection made by the user 
 */
function getUserSelection() {

    let isAValidSelection = false;
    let selection;

    while (!isAValidSelection) {

        selection = prompt(`Choice your weapon: Rock 🪨, paper📰, scissors✂`).trim().toLowerCase();

        if (GAME_OPTIONS.includes(selection))
            isAValidSelection = true;
        else
            alert("Please check a valid selection: paper, rock, scissors are the valid ones");

    }
    return selection;
}
/*
Create a function getComputerChoice which randomly returns to you a value of rock, paper of scissors 
*/
function getComputerChoice() {
    //Generate a random number from 0 to 3
    let randomNumber = Math.floor(Math.random() * GAME_OPTIONS.length);
    //if the randomNumber is 0 the choice will be rock, if the random number is 1 the choice will be paper, if the random number is 2 the choice will be scissors
    return GAME_OPTIONS[randomNumber];
}

/**
 * Run the Rock, paper, scissors algorithm.
 * @param {*} userChoice 
 * @param {*} computerChoice 
 * @returns 
 */
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie";
    if (RULES[userChoice] === computerChoice) return "You won";
    return "You lost";
}
/**
 * Run one round of the game 
 * @returns true if the user won the round, false if the user lost the round, 0 if it's a tie 
 */
function play() {
    let userChoice = getUserSelection();
    let computerChoice = getComputerChoice();
    let roundResult = playRound(userChoice, computerChoice);
    alert(roundResult);
    //If the user won the round return true.
    if (roundResult == "You won") return true;
    if (roundResult == "You lost") return false;
    return 0;
}
/**
 * Run the game with 5 matches, the participant with more score is the winner
 */
function playGame() {
    const MATCHES = 5;
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < MATCHES; i++) {
        let result = play();
        //If it is not a tie 
        if (!(result === 0)) {
            if (result) userScore++;
            else computerScore++;
        }
    }
    if (userScore === computerScore) alert("It's a tie");
    else if (userScore > computerScore) alert("You won");
    else alert("You lost");
}
playGame();