const game = () => {
  let pScore = 0;
  let cScore = 0;

  //startgame.....
  const startGame = () => {
    const playButton = document.querySelector(".intro button");

    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.trunc(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //where we call compare hands
        compareHands(this.textContent, computerChoice);

        //update images
        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
      });
    });
  };

  //upadating score

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //updatetext
    const winner = document.querySelector(".winner");

    //check for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a draw";
      return;
    }

    //check for the rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //call inner function
  playMatch();
  startGame();
};

//start game function
game();
