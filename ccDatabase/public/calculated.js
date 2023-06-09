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

function getPercentage() {
    return localStorage.getItem('perc');
}

const text = `${getPlayerName()} and ${getOtherPlayerName()} are ${getPercentage()}% compatible`;

const percentageEl = document.querySelector('#percent');
percentageEl.textContent = `${getPercentage()}%`;

document.getElementById("player-messages").innerHTML = '<div class="event">game connected</div>';
function updateChat() {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
    `<div class="event"><span class="username-formatted">${getPlayerName()}</span> and <span class="inputname-formatted">${getOtherPlayerName()}</span> are <span class="percentage">${getPercentage()}</span>% compatible</div>` + chatText.innerHTML;
}

async function saveScore(score) {
    const userName = getPlayerName();
    const otherName = getOtherPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {couple: `${userName} + ${otherName}`, compatibility: `${score}%`, date: date};

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

saveScore(getPercentage())