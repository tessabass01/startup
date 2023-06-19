import React from 'react';

import './animation.css'

export function Calculating(props) {
    return (
        <main className="container-fluid">
        <div className="players">
          <div id="player-messages">
            <div className="event">game connected</div>
          </div>
        </div>
  
          <div className="game">
              <div className="animated-shape"></div>
              <div id="heart"></div>
              <div className="names">
                  <div className="username">{props.userName}</div>
                  <div className="inputname">{props.inputName}</div>
              </div>
              <div className="calculate-button">
                  <form method="get" action="calculating.html">
                      <button type="submit" className="btn btn-primary">Calculate</button>
                  </form>
              </div>
          </div>
      </main>
    );
}