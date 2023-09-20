// Start variables

let playerWins = 0;
let playerLosses = 0;

let computerWins = 0;
let computerLosses = 0;

const Scissors = 0;
const Paper = 1;
const Rock = 2;

let message = undefined;

const startGame = document.getElementById('gameStartBTN')
startGame.addEventListener('click', gameLoop);

// Start the game || End the game || Restart Game

function gameLoop() {
    if (playerWins === 5 || computerWins === 5) { endGame(); }
    else { individualGame(); }
}

function endGame () {
        if (playerWins === 5) { endMSGPlayer(); }
        else { endMSGComputer(); }
}

function endMSGPlayer() {
    'You won the match, congratulation! Try again?'
}

function endMSGComputer() {
    'You lost the match, better luck next time! Try again?'
}

function restartGame () {
    playerWins = 0;
    playerLosses = 0;

    computerWins = 0;
    computerLosses = 0;

    restartLists();
}

// Player Choice - Input, toString, 

function individualGame() {
    playerChoice = promptPlayer();
    playerChoice = transformPlayerChoice(playerChoice);
    playerChoice = playerChoiceFunction(playerChoice);
    computerChoiceRandom();
    winnerCheck(playerChoice, computerChoice);
    winnerActions(winnerScore);
}

function promptPlayer() {
    playerChoice = prompt("Make your choice: Rock, Paper, or Scissors?");
    return playerChoice;
}

function transformPlayerChoice(playerChoice) {
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    return playerChoice;
}

function playerChoiceFunction(playerChoice) {
    if (playerChoice == 'Scissors') { playerChoice = Scissors; }
    else if (playerChoice == 'Paper') { playerChoice = Paper; }
    else { playerChoice = Rock; }
    return playerChoice;
}

// Computer Choice

function computerChoiceRandom() {
    computerChoice = Math.floor(Math.random() * 3);
    computerChoiceFunction(computerChoice);
    return computerChoice;
}

function computerChoiceFunction(computerChoice) {
    if (computerChoice === 0) { computerChoice = Scissors; }
    else if (computerChoice === 1) { computerChoice = Paper; }
    else { computerChoice = Rock; }
    return computerChoice;
}

// Calculate Winner

function winnerCheck(playerChoice, computerChoice) {
    winnerScore = (playerChoice - computerChoice);
    console.log(winnerScore);
    return winnerScore;
}

function winnerActions(winnerScore) {
    console.log(winnerScore);
    if (winnerScore === -1 || winnerScore === 2) { ++playerWins; ++computerLosses; message = 0; }
    else if (winnerScore === -2 || winnerScore === 1) { ++computerWins; ++playerLosses; message = 1; }
    else { message = 2; }
    popupResult();
}

function popupResult() {
    playerChoiceStrings(playerChoice);
    computerChoiceStrings(computerChoice);
    if (message === 0) { 'You won! ' + playerChoiceString + ' beats ' + computerChoiceString + '.'; }
    else if (message === 1) { 'You lost! ' + computerChoiceString + ' beats ' + playerChoiceString + '.'; }
    else { 'A tie! No winners this time.'; }
    updateWinsLosses();
    updateLists();
    updateLastChoices(playerChoice, computerChoice);
}

// User Interface (UI)

function updateWinsLosses() {
    document.getElementById('playerWins').textContent = playerWins;
    document.getElementById('playerLosses').textContent = playerLosses;
    document.getElementById('computerWins').textContent = computerWins;
    document.getElementById('computerLosses').textContent = computerLosses;
}

function updateLists() {
    var playerBoard = document.getElementById('playerBoard');
    var playerli = document.createElement("li");
    playerChoiceStrings(playerChoice);
    var playerChoiceBoard = playerChoiceString;
    playerli.appendChild(document.createTextNode(playerChoiceBoard));
    playerBoard.appendChild(playerli);

    var computerBoard = document.getElementById('computerBoard');
    var computerli = document.createElement("li");
    computerChoiceStrings(computerChoice);
    var computerChoiceBoard = computerChoiceString;
    computerli.appendChild(document.createTextNode(computerChoiceBoard));
    computerBoard.appendChild(computerli);
}

function updateLastChoices(playerChoice, computerChoice) {
    const playerChoiceText = playerChoiceStrings(playerChoice);
    document.getElementById('youLastChoice').textContent = 'You ⭬ ' + playerChoiceText;
    const computerChoiceText = computerChoiceStrings(computerChoice);
    document.getElementById('computerLastChoice').textContent = computerChoiceText + ' ⭪ Computer';
}

function playerChoiceStrings(playerChoice) {
    if (playerChoice === 0) {playerChoiceString='Scissors';}
    else if (playerChoice === 1) {playerChoiceString='Paper';}
    else if (playerChoice === 2) {playerChoiceString='Rock';}
    else {playerChoiceString='';}
    return playerChoiceString;
}

function computerChoiceStrings(computerChoice) {
    if (computerChoice === 0) {computerChoiceString='Scissors';}
    else if (computerChoice === 1) {computerChoiceString='Paper';}
    else if (computerChoice === 2) {computerChoiceString='Rock';}
    else {computerChoiceString='';}
    return computerChoiceString;
}

function restartLists() {

}

// Functions to Start on Launch

updateLastChoices();
updateWinsLosses();