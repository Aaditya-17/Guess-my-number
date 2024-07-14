let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
console.log(hiddenNumber);
let dispalyMsg = document.querySelector(".message");
let checkbtn = document.querySelector(".check");
let Score = document.querySelector(".score");
let gamescore = Number(Score.textContent);
let noBox = document.querySelector(".no-box");
let highScore = document.querySelector(".highscore");

//Game Logic
checkbtn.addEventListener("click", function () {
    let guessval = Number(document.querySelector(".guess").value);
    if (gamescore > 1) {
        if (guessval === hiddenNumber) {
            dispalyMsg.textContent = "You Win The Game! 🎉";
            noBox.textContent = hiddenNumber;
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".no-box").style.width = "300px";
            if (gamescore > Number(highScore.textContent)) {
                highScore.textContent = gamescore;
            }
        } else if (guessval !== hiddenNumber) {
            dispalyMsg.textContent =
                guessval > hiddenNumber ? "📈 To High!" : "📉 To Low!";
            gamescore -= 1;
            Score.textContent = gamescore;
        }
    } else {
        dispalyMsg.textContent = "You Lost The Game 😭";
        Score.textContent = gamescore;
        noBox.textContent = hiddenNumber;
        document.querySelector("body").style.backgroundColor = "#c94848";
    }
});

//reset logic
let again = document.querySelector(".again");
again.addEventListener("click", function () {
    gamescore = 20;
    dispalyMsg.textContent = "Start Guessing...";
    Score.textContent = gamescore;
    noBox.textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = null;
    hiddenNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(hiddenNumber);
});
