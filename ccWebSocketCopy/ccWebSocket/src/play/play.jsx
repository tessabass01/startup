import React from 'react';
import { useNavigate } from 'react-router-dom';

import './play.css';

export function Play(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [inputName, setInputName] = React.useState(props.inputName);
    const navigate = useNavigate();

    function calculate() {
        // const inputNameEl = document.querySelector("input.inputname");
        props.onPress(inputName);
        // setInputName(inputName);
        navigate('/calculating');
      }

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
                  <div className="username">{userName}</div>
                  <input
                        className='inputname'
                        type='text'
                        // value={inputName}
                        onChange={(e) => localStorage.setItem(inputName, e.target.value)}
                        placeholder='Their name here'
                    />
              </div>
              <div className="calculate-button">
                  {/* <form method="get" action="calculating.html"> */}
                      <button type="submit" className="btn btn-primary" onClick={() => calculate()}>Calculate</button>
                  {/* </form> */}
              </div>
          </div>
      </main>
    );
}