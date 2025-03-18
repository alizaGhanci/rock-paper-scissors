let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userscore");
let compScorePara = document.querySelector("#compscore");

const showWinner = (userWins, userChoice, compChoice) => {
    if (userWins) {
        userScorePara.innerText = ++userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScorePara.innerText = ++compscore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Game was a DRAW. Please try again!";
    msg.style.backgroundColor = "black";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (compChoice === userChoice) {
        drawGame();
    } else {
        let userWins = true;
        if (userChoice === "rock") {
            userWins = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWins = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWins = compChoice === "rock" ? false : true;
        }
        showWinner(userWins, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});