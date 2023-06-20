import React from 'react';

import './play.css';
// import './animation.css';


export function Play(props) {
    const [isCalculating, setState] = React.useState(false);
    const [percentage, setPercentage] = React.useState('');
    const [userName, setUserName] = React.useState(props.userName);
    const [inputName, setInputName] = React.useState('');

    function createPercentage() {
        return Math.floor(Math.random() * 100)
    }

    async function saveScore(score) {
        const date = new Date().toLocaleDateString();
        const newScore = {name: `${userName} + ${inputName}`, score: score, date: date};
      
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
      }

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

    async function calculate() {
        setPercentage('Calculating...');
        const percent = createPercentage();
        setState(true);
        saveScore(percent);
        setTimeout(() => {setState(false)}, 6000);
        setTimeout(() => {setPercentage(`${percent}%`)}, 6000);
      }

    return (
        <main className='container-fluid'>
        <div className='players'>
          <div id='player-messages'>
            <div className='event'>game connected</div>
          </div>
        </div>
  
          <div className='game'>
              <div className={`${isCalculating ? 'calculating' : 'animated-shape'}`}></div>
              <div id='percent'>{percentage}</div>
              <div id='heart'></div>
              <div className='names'>
                  <div className='username'>{userName}</div>
                  <input
                        className='inputname'
                        type='text'
                        // value={inputName}
                        onChange={(e) => localStorage.setItem(inputName, e.target.value)}
                        placeholder='Their name here'
                    />
              </div>
              <div className='calculate-button'>
                      <button type='submit' className='btn btn-primary' onClick={() => calculate()}>Calculate</button>
              </div>
          </div>
      </main>
    );
}