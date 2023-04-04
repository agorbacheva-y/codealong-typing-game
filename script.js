// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// PART 1
// 1. getRandomWord
// 2. addWordToDOM
// 3. add event listener to text element
// 4. updateScore

// PART 2
// 5. get the cursor automatically in input
// 6. Counting down - timer
// 7. update time
// 8. gameOver and reload game
// 9. eventlistener => time += 3;

// PART 3
// 10. settings btn
// 11. settings select
// 12. pull from local storage
// 13. set difficulty select value
// 14. set time depending on difficulty in the eventlistener

// Initializing word
let randomWord;

// Initializing score
let score = 0;

// initializing time
let time = 10;

// focus text input at start
text.focus();

// count down
const timeInterval = setInterval(updateTime, 1000);


// GET RANDOM WORD
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
  // floor will just round down
  // function to get a random word from our words array
}

// ADD WORD TO DOM
function addWordToDOM() {
  // call function getRandomWord and save it in variable randomWord
  randomWord = getRandomWord();
  // connect to DOM with id
  word.innerHTML = randomWord;
}

// SET TIMER TO COUNT DOWN INSTEAD OF UP
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);

    gameOver();
  }
}

// GAME OVER
function gameOver() {
  endgameEl.innerHTML = `<h1>Time out!</h1> <p>Your final score is ${score}.</p> <button onClick="location.reload()">Reload</button>`

  endgameEl.style.display = "flex";
}

// ADD 1 TO SCORE
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDOM();

// RUN GAME
text.addEventListener("input", (event) => {
  // event parameter gets value that user typed in input
  // create variable to save value user typed in input
  const insertedText = event.target.value;
  console.log(insertedText);

  if (insertedText === randomWord) {
    updateScore();

    addWordToDOM();

    // clear input field
    event.target.value = "";

    // add time if input is correct
    time += 3;
  }
});
