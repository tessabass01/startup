function getPlayerName() {
    return localStorage.getItem('userName');
  }

function calculate() {
    const inputNameEl = document.querySelector("input.inputname");
    localStorage.setItem("inputName", inputNameEl.value);
    window.location.href = "calculating.html";
  }

const matches = document.querySelectorAll('span.username-formatted');

for (i = 0; i < matches.length; ++i) {
  matches[i].textContent = getPlayerName();
}

const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = getPlayerName();

// console.log(localStorage.getItem('userName'))

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
  
//       document.querySelectorAll('.game-button').forEach((el, i) => {
//         if (i < btnDescriptions.length) {
//           this.buttons.set(el.id, new Button(btnDescriptions[i], el));
//         }
//       });
  
//       const playerNameEl = document.querySelector('.player-name');
//       playerNameEl.textContent = this.getPlayerName();
//     }

//     getPlayerName() {
//     return localStorage.getItem('userName');
//   }
// }