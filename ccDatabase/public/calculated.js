function getPlayerName() {
    return localStorage.getItem('userName');
    // try {
    // const response = await fetch(`/api/username`);
    // const userName = await response.json();
    // // Save the scores in case we go offline in the future
    // localStorage.setItem('username', JSON.stringify(userName));
    // return users.username
  // } catch {
  //   // If there was an error then just use the last saved scores
  //   const userText = localStorage.getItem('userName');
  //   if (userText) {
  //     user = JSON.parse(userText);
  //     return user } 
//   }
// }
}

function createPercentage() {
    return Math.floor(Math.random() * 100)
}

function calculate() {
    const inputNameEl = document.querySelector("input.inputname");
    localStorage.setItem("inputName", inputNameEl.value);
    window.location.href = "calculating.html";
  }

const matches = document.querySelectorAll('span.username-formatted');

// async function helper2() {
  for (i = 0; i < matches.length; ++i) {
    matches[i].textContent = getPlayerName();
  }
  const playerNameEl = document.querySelector('.username');
  playerNameEl.textContent = getPlayerName();


// helper2()

function getOtherPlayerName() {
    return localStorage.getItem('inputName');
  }

async function helper() {
  let percentage = await getPercentage();
  let username = getPlayerName()
  const otherPlayerNameEl = document.querySelector('.inputname');
  otherPlayerNameEl.textContent = getOtherPlayerName();

  const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
    `<div class="event"><span class="username-formatted">${username}</span> and <span class="inputname-formatted">${getOtherPlayerName()}</span> are <span class="percentage">${percentage}</span>% compatible</div>` + chatText.innerHTML;

  const percentageEl = document.querySelector('#percent');
  percentageEl.textContent = `${percentage}%`;
}

helper()

document.getElementById("player-messages").innerHTML = '<div class="event">game connected</div>';

async function saveScore(score) {
    const userName = getPlayerName();
    const otherName = getOtherPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: `${userName} + ${otherName}`, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });
      console.log("hello?")
      console.log(JSON.stringify(newScore))

      // Store what the service gave us as the high scores
      const scores = await response.json();
      console.log(scores);
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

  async function getPercentage() {
    try {
      // Get the latest high scores from the service
      const userName = getPlayerName();
      const otherName = getOtherPlayerName();
      const response = await fetch(`/api/score/${userName} + ${otherName}`);
      const score = await response.json();
      // Save the scores in case we go offline in the future
      localStorage.setItem('score', JSON.stringify(score));
      return score.score
    } catch {
      // If there was an error then just use the last saved scores
      const scoreText = localStorage.getItem('score');
      if (scoreText) {
        score = JSON.parse(scoreText);
        return score } 
    }
  }
