function getPlayerName() {
    return localStorage.getItem('userName');
  }

function createPercentage() {
    return Math.floor(Math.random() * 100)
}

// function saveScore(score) {
//     const userName = getPlayerName();
//     let scores = [];
//     const scoresText = localStorage.getItem('scores');
//     if (scoresText) {
//     scores = JSON.parse(scoresText);
//     }
//     scores = updateScores(userName, score, scores);

//     localStorage.setItem('scores', JSON.stringify(scores))
// }

function calculate() {
    const inputNameEl = document.querySelector("input.inputname");
    localStorage.setItem("inputName", inputNameEl.value);
    localStorage.setItem("perc", createPercentage());
    updateScores()
    window.location.href = "calculating.html";
  }

const matches = document.querySelectorAll('span.username-formatted');

for (i = 0; i < matches.length; ++i) {
  matches[i].textContent = getPlayerName();
}

const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = getPlayerName();

function getOtherPlayerName() {
    return localStorage.getItem('inputName');
  }

const otherPlayerNameEl = document.querySelector('.inputname');
otherPlayerNameEl.textContent = getOtherPlayerName();

const displayedPlayerNameEl = document.querySelector('.inputname-formatted');
displayedPlayerNameEl.textContent = getOtherPlayerName();

// function insertChild(parentSelector, text) {
//     const newChild = document.createElement('div');
//     newChild.textContent = text;
  
//     const parentElement = document.querySelector(parentSelector);
//     parentElement.appendChild(newChild);
//   }

function getPercentage() {
    return localStorage.getItem('perc');
}

const text = `${getPlayerName()} and ${getOtherPlayerName()} are ${getPercentage()}% compatible`;
  
// insertChild('#player-messages', `${getPlayerName()} and ${getOtherPlayerName()} are ${getPercentage()}% compatible`);

const percentageEl = document.querySelector('#percent');
percentageEl.textContent = `${getPercentage()}%`;

document.getElementById("player-messages").innerHTML = '<div class="event">game connected</div>';
function updateChat() {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
    `<div class="event"><span class="username-formatted">${getPlayerName()}</span> and <span class="inputname-formatted">${getOtherPlayerName()}</span> are <span class="percentage">${getPercentage()}</span>% compatible</div>` + chatText.innerHTML;
}

// function setScores() {
//     localStorage.setItem("scores", [])
// }

// function updateScores() {
//     const savedscores = JSON.parse(localStorage.getItem("scores"));
//     const newscore = { "score": getPercentage(), "person": getOtherPlayerName() };
//     savedscores.push(newscore);
//     console.log(savedscores)
//     localStorage.setItem("scores", JSON.stringify(savedscores));
// }



// class Game {
//     buttons;
//     allowPlayer;
//     sequence;
//     playerPlaybackPos;
//     mistakeSound;
  
//     constructor() {
//       this.buttons = new Map();
//       this.allowPlayer = false;
//       this.sequence = [];
//       this.playerPlaybackPos = 0;
//       this.mistakeSound = loadSound('error.mp3');
//     }

//     getPlayerName() {
//         return localStorage.getItem('userName') ?? 'Mystery player';
//       }

async function saveScore(score) {
    const userName = getOtherPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      updateScoresLocal(newScore);
    }
  }


// function saveScore(score) {
//     const userName = getOtherPlayerName();
//     let scores = [];
//     const scoresText = localStorage.getItem('scores');
//     if (scoresText) {
//     scores = JSON.parse(scoresText);
//     }
//     scores = updateScores(userName, score, scores);

//     localStorage.setItem('scores', JSON.stringify(scores));
//     console.log(scores)
// }


function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  };



// function updateScores(userName, score, scores) {
//     const date = new Date().toLocaleDateString();
//     const newScore = { name: userName, score: score, date: date };

//     let found = false;
//     for (const [i, prevScore] of scores.entries()) {
//     if (score > prevScore.score) {
//         scores.splice(i, 0, newScore);
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     scores.push(newScore);
// }

// if (scores.length > 10) {
//     scores.length = 10;
// }

// return scores;
// }


saveScore(getPercentage())


// const url = "https://numbergenerator.org/randomnumbergenerator/1-100";
// fetch(url)
//   .then((x) => x.json())
//   .then((response) => {
//     document.querySelector("html").textContent = JSON.stringify(
//       response,
//       null,
//       "  "
//     );
//   });
//   .then((one) => console.log(one));



// function displayQuote(data) {



// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
// }
    
// function displayQuote(data) {
//     fetch("https://api.quotable.io/random")
//     .then((response) => response.json())
//     .then((data) => {
//       const containerEl = document.querySelector('#quote');

//       const quoteEl = document.createElement('p');
//       quoteEl.classList.add('quote');
//       const authorEl = document.createElement('p');
//       authorEl.classList.add('author');

//       quoteEl.textContent = data.content;
//       authorEl.textContent = data.author;

//       containerEl.appendChild(quoteEl);
//       containerEl.appendChild(authorEl);
//     });
// }

// displayQuote();

    // fetch('https://numbergenerator.org/randomnumbergenerator/1-100')
    //     .then((response) => response.json())
    //     .then((vari) => console.log(vari))
    //     .then((data) => {
    //         const containerEl = document.querySelector('#percent');

    //     })}






// const btnDescriptions = [
//     { file: 'sound1.mp3', hue: 120 },
//     { file: 'sound2.mp3', hue: 0 },
//     { file: 'sound3.mp3', hue: 60 },
//     { file: 'sound4.mp3', hue: 240 },
//   ];
  
//   class Button {
//     constructor(description, el) {
//       this.el = el;
//       this.hue = description.hue;
//       this.sound = loadSound(description.file);
//       this.paint(25);
//     }
  
//     paint(level) {
//       const background = `hsl(${this.hue}, 100%, ${level}%)`;
//       this.el.style.backgroundColor = background;
//     }
  
//     async press(volume = 1.0) {
//       return new Promise(async (pressResolve) => {
//         this.paint(50);
//         await this.playSound(volume);
//         this.paint(25);
//         pressResolve();
//       });
//     }
  
//     async playSound(volume) {
//       return new Promise((playResolve) => {
//         this.sound.volume = volume;
//         this.sound.onended = playResolve;
//         this.sound.play();
//       });
//     }
//   }
  
//   class Game {
//     buttons;
//     allowPlayer;
//     sequence;
//     playerPlaybackPos;
//     mistakeSound;
  
//     constructor() {
//       this.buttons = new Map();
//       this.allowPlayer = false;
//       this.sequence = [];
//       this.playerPlaybackPos = 0;
//       this.mistakeSound = loadSound('error.mp3');
  
//       document.querySelectorAll('.game-button').forEach((el, i) => {
//         if (i < btnDescriptions.length) {
//           this.buttons.set(el.id, new Button(btnDescriptions[i], el));
//         }
//       });
  
//       const playerNameEl = document.querySelector('.player-name');
//       playerNameEl.textContent = this.getPlayerName();
//     }
  
//     async pressButton(button) {
//       if (this.allowPlayer) {
//         this.allowPlayer = false;
//         await this.buttons.get(button.id).press(1.0);
  
//         if (this.sequence[this.playerPlaybackPos].el.id === button.id) {
//           this.playerPlaybackPos++;
//           if (this.playerPlaybackPos === this.sequence.length) {
//             this.playerPlaybackPos = 0;
//             this.addButton();
//             this.updateScore(this.sequence.length - 1);
//             await this.playSequence();
//           }
//           this.allowPlayer = true;
//         } else {
//           this.saveScore(this.sequence.length - 1);
//           this.mistakeSound.play();
//           await this.buttonDance(2);
//         }
//       }
//     }
  
//     async reset() {
//       this.allowPlayer = false;
//       this.playerPlaybackPos = 0;
//       this.sequence = [];
//       this.updateScore('--');
//       await this.buttonDance(1);
//       this.addButton();
//       await this.playSequence();
//       this.allowPlayer = true;
//     }
  
//     getPlayerName() {
//       return localStorage.getItem('userName') ?? 'Mystery player';
//     }
  
//     async playSequence() {
//       await delay(500);
//       for (const btn of this.sequence) {
//         await btn.press(1.0);
//         await delay(100);
//       }
//     }
  
//     addButton() {
//       const btn = this.getRandomButton();
//       this.sequence.push(btn);
//     }
  
//     updateScore(score) {
//       const scoreEl = document.querySelector('#score');
//       scoreEl.textContent = score;
//     }
  
//     async buttonDance(laps = 1) {
//       for (let step = 0; step < laps; step++) {
//         for (const btn of this.buttons.values()) {
//           await btn.press(0.0);
//         }
//       }
//     }
  
//     getRandomButton() {
//       let buttons = Array.from(this.buttons.values());
//       return buttons[Math.floor(Math.random() * this.buttons.size)];
//     }
  
//     saveScore(score) {
//       const userName = this.getPlayerName();
//       let scores = [];
//       const scoresText = localStorage.getItem('scores');
//       if (scoresText) {
//         scores = JSON.parse(scoresText);
//       }
//       scores = this.updateScores(userName, score, scores);
  
//       localStorage.setItem('scores', JSON.stringify(scores));
//     }
  
//     updateScores(userName, score, scores) {
//       const date = new Date().toLocaleDateString();
//       const newScore = { name: userName, score: score, date: date };
  
//       let found = false;
//       for (const [i, prevScore] of scores.entries()) {
//         if (score > prevScore.score) {
//           scores.splice(i, 0, newScore);
//           found = true;
//           break;
//         }
//       }
  
//       if (!found) {
//         scores.push(newScore);
//       }
  
//       if (scores.length > 10) {
//         scores.length = 10;
//       }
  
//       return scores;
//     }
//   }
  
//   const game = new Game();
  
//   function delay(milliseconds) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(true);
//       }, milliseconds);
//     });
//   }
  
//   function loadSound(filename) {
//     return new Audio('assets/' + filename);
//   }
  
//   setInterval(() => {
//     const score = Math.floor(Math.random() * 3000);
//     const chatText = document.querySelector('#player-messages');
//     chatText.innerHTML =
//       `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` + chatText.innerHTML;
//   }, 5000);