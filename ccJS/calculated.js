function getPlayerName() {
    return localStorage.getItem('userName');
  }

function createPercentage() {
    return Math.floor(Math.random() * 100)
}

function calculate() {
    const inputNameEl = document.querySelector("input.inputname");
    localStorage.setItem("inputName", inputNameEl.value);
    localStorage.setItem("perc", createPercentage());
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
