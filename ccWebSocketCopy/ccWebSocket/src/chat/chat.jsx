import React from 'react';
import { useEffect } from 'react';
import './chat.css'

export function Chat(props) {

// function configureWebSocket() {
// Adjust the webSocket protocol to what is being used for HTTP
const [userName, setUserName] = React.useState(props.userName);
const [messages, setMsgList] = React.useState([]);
const [message, setMessage] = React.useState('');

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
useEffect(() => {
socket.onopen = (event) => {
    console.log('open');
appendMsg('system', 'websocket', 'connected');
};
}, []);

// Display messages we receive from our friends
useEffect(() => {
socket.onmessage = async (event) => {
    console.log('message received');
const text = await event.data.text();
const chat = JSON.parse(text);
appendMsg('friend', chat.name, chat.msg);
};
}, []);

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
appendMsg('system', 'websocket', 'disconnected');
// document.querySelector('#name-controls').disabled = true;
document.querySelector('#chat-controls').disabled = true;
};
// }

// function getPlayerName() {
//     return localStorage.getItem('userName');
//   }

function createMessageArray() {
    const messageArray = [];
    for (const [i, msg] of messages.entries()) {
      let message = 'unknown';
      if (msg.type === GameEvent.End) {
        message = `scored ${msg.value.score}`;
      } else if (msg.type === GameEvent.Start) {
        message = `started a new game`;
      } else if (msg.type === GameEvent.System) {
        message = msg.value.msg;
      }
    }
}

// Send a message over the webSocket
function sendMessage() {
    console.log('sending');
    if (message) {
        appendMsg('me', 'me', message);
        // const name = document.querySelector('#my-name').value;
        socket.send(`{"name":"${userName}", "msg":"${message}"}`);
        setMessage('');
    }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
    const chatText = document.querySelector('#chat-text');
    chatText.innerHTML =
    `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
    chatText.innerHTML;
}

// Send message on enter keystroke
// const input = document.querySelector('#new-msg');
// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//     sendMessage();
//     }
// });

    return (
        <main className="container-fluid text-center" id="chat-main">
        <div className="name">
            <h1>Who else is looking for love?</h1>
        </div>
        <fieldset id="chat-controls">
          <legend>Chat</legend>
          <input
            type='text'
            onChange={(e) => setMessage(e.target.value)}
            placeholder='I love you...'
          />
          <button onClick={() => sendMessage()} className="btn btn-primary">Send</button>
        </fieldset>
        <div id="chat-text"></div>
      </main>
    );
}