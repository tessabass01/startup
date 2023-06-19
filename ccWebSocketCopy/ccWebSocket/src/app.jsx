import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {Login} from './login/login'
import {AuthState} from './login/authState';
import {About} from './about/about'
import {Play} from './play/play'
import {Calculating} from './calculating/calculating'
import {Calculated} from './calculated/calculated'
import {Scores} from './scores/scores'
import {Chat} from './chat/chat'

function NotFound() {
    return <main className="container-fluid text-center">404: Return to sender. Address unknown.</main>;
}

export default function App() {

    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const [inputName, setInputName] = React.useState(localStorage.getItem('inputName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
    <BrowserRouter>
    <div className="app bg-dark">
    <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <NavLink className="navbar-brand" href="#">Chemistry Calculator<sup>&reg;</sup></NavLink>
        <menu className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to="">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="play">Play</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="scores">Scores</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="chat">Chat</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">About</NavLink>
          </li>
        </menu>
      </nav>
    </header>

<Routes>
<Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
    <Route path='/play' element={<Play userName={userName} inputName={inputName} onPress={() => {setInputName(inputName)}} />} />
    <Route path='/calculating' element={<Calculating userName={userName} inputName={inputName} />} />
    <Route path='/calculated' element={<Calculated userName={userName} inputName={inputName}/>} />
    <Route path='/scores' element={<Scores />} />
    <Route path='/chat' element={<Chat />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<NotFound />} />
</Routes>

    <footer className="bg-dark text-light">
      <div className="container-fluid">
        <span className="text-reset">Tessa Bass</span>
        <a className="text-reset" href="https://github.com/tessabass01/startup">Source</a>
      </div>
    </footer>
  </div>
  </BrowserRouter>
  );
}