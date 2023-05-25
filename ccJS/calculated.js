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

function getOtherPlayerName() {
    return localStorage.getItem('inputName');
  }

const otherPlayerNameEl = document.querySelector('.inputname');
otherPlayerNameEl.textContent = getOtherPlayerName();

const displayedPlayerNameEl = document.querySelector('.inputname-formatted');
displayedPlayerNameEl.textContent = getOtherPlayerName();

function insertChild(parentSelector, text) {
    const newChild = document.createElement('div');
    newChild.textContent = text;
  
    const parentElement = document.querySelector(parentSelector);
    parentElement.appendChild(newChild);
  }

function getPercentage() {
    return Math.floor(Math.random() * 100)
}

const text = `${getPlayerName()} and ${getOtherPlayerName()} are ${getPercentage()}% compatible`;
  
insertChild('#player-messages', text);