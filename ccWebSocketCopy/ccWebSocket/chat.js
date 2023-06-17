// function configureWebSocket() {
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
    console.log('booty');
appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
    console.log('booty');
const text = await event.data.text();
const chat = JSON.parse(text);
appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
appendMsg('system', 'websocket', 'disconnected');
// document.querySelector('#name-controls').disabled = true;
document.querySelector('#chat-controls').disabled = true;
};
// }

function getPlayerName() {
    return localStorage.getItem('userName');
  }

// Send a message over the webSocket
function sendMessage() {
    const msgEl = document.querySelector('#new-msg');
    const msg = msgEl.value;
    console.log('butt');
    if (!!msg) {
        appendMsg('me', 'me', msg);
        // const name = document.querySelector('#my-name').value;
        socket.send(`{"name":"${getPlayerName()}", "msg":"${msg}"}`);
        msgEl.value = '';
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
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    sendMessage();
    }
});

// // Disable chat if no name provided
// const chatControls = document.querySelector('#chat-controls');
// const myName = document.querySelector('#my-name');
// myName.addEventListener('keyup', (e) => {
//     chatControls.disabled = myName.value === '';
// });


// configureWebSocket()