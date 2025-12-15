const lettersContainer = document.getElementById("letters");
const wordInput = document.getElementById("wordInput");
const validateBtn = document.getElementById("validateBtn");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const historyList = document.getElementById("history");
const restartBtn = document.getElementById("restartBtn");

let letters = [];
let score = 0;
let time = 60;
let timer;

// Générer lettres aléatoires
function generateLetters() {
    letters = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 10; i++) {
        letters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    lettersContainer.textContent = letters.join(" ");
}

// Vérifier le mot
function isValidWord(word) {
    let tempLetters = [...letters];
    for (let char of word) {
        if (!tempLetters.includes(char)) {
            return false;
        }
        tempLetters.splice(tempLetters.indexOf(char), 1);
    }
    return true;
}

// Démarrer le timer
function startTimer() {
    timer = setInterval(() => {
        time--;
        timeDisplay.textContent = time;

        if (time === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// Valider le mot
validateBtn.addEventListener("click", () => {
    const word = wordInput.value.toUpperCase();

    if (word.length === 0) return;

    if (isValidWord(word)) {
        const points = word.length;
        score += points;
        result.textContent = `Mot valide (+${points} points)`;
        result.style.color = "lightgreen";
    } else {
        result.textContent = "Lettres invalides";
        result.style.color = "red";
    }

    scoreDisplay.textContent = "Score : " + score;
    wordInput.value = "";
});

// Fin du jeu
function endGame() {
    validateBtn.disabled = true;
    result.textContent = "Temps écoulé !";
    saveScore();
    displayHistory();
}

// Sauvegarder score (localStorage)
function saveScore() {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push(score);
    localStorage.setItem("scores", JSON.stringify(scores));
}

// Afficher historique
function displayHistory() {
    historyList.innerHTML = "";
    const scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.slice(-5).reverse().forEach((s, index) => {
        const li = document.createElement("li");
        li.textContent = `Partie ${scores.length - index} : ${s} points`;
        historyList.appendChild(li);
    });
}

// Rejouer
restartBtn.addEventListener("click", () => {
    location.reload();
});

// Initialisation
generateLetters();
displayHistory();
startTimer();
