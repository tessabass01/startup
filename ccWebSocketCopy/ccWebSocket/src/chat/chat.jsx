import React from 'react';
// import { useEffect } from 'react';
import { Types, GameNotifier } from './helper';
import './chat.css'

export function Chat(props) {

    const [userName, setUserName] = React.useState(props.userName);
    const [messages, setMsgList] = React.useState([]);
    const [message, setMessage] = React.useState('');

// const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
// const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    React.useEffect(() => {
        GameNotifier.addHandler(handleGameEvent);

        return () => {
        GameNotifier.removeHandler(handleGameEvent);
        };
    });

    function handleGameEvent(event) {
        setMsgList([...messages, event]);
    }

    function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of messages.entries()) {
        //   let newMessage = event.msg;
        //   if (event.type === Types.Connected) {
        //     newMessage = `scored ${event.value.score}`;
        //   } else if (event.type === Types.Disconnected) {
        //     newMessage = `started a new game`;
        //   } else if (event.type === Types.Friend) {
        //     newMessage = event.msg;
        //   } else if (event.type === Types.Me) {
        //     newMessage = event.value.msg;
        //   }
    
          messageArray.push(<div key={i} className='event'><span className={event.cls}>{event.from}</span>{`: ${event.msg}`}</div>);
        }
        return messageArray;
      }
// Display that we have opened the webSocket
// useEffect(() => {
// socket.onopen = (event) => {
//     console.log('open');
// createMessageArray('system', 'websocket', 'connected');
// };
// // }, []);

// // Display messages we receive from our friends
// useEffect(() => {
// socket.onmessage = async (event) => {
//     console.log('message received');
// const text = await event.data.text();
// const chat = JSON.parse(text);
// // createMessageArray(chat, 'friend');
// createMessageArray('friend', chat.name, chat.msg);
// };
// }, []);

// // If the webSocket is closed then disable the interface
// socket.onclose = (event) => {
// createMessageArray('system', 'websocket', 'disconnected');
// // document.querySelector('#name-controls').disabled = true;
// document.querySelector('#chat-controls').disabled = true;
// };
// // }

// // function getPlayerName() {
// //     return localStorage.getItem('userName');
// //   }

// function createMessageArray(cls, from, msg) {
//     // socket.onmessage = async (event) => {
//     //     // console.log('message received');
//     // const text = await event.data.text();
//     // const chat = JSON.parse(text);
//     // for (const [i, msg] of messages.entries()) {
//     //   let newMsg = 'unknown';
//     //   if (userName !== chat.name) {
//     //     newMsg = `${chat.name}: ${chat.msg}`;
//     //     newMsg = `me: ${message}`;
//     //   }
//       messages.push(
//         <div><span className={cls}>{from}</span>{`: ${msg}`}</div>
//       );
//     setMsgList(messages);
//     console.log(messages);
//     // return messages;
//     }
    


// // Send a message over the webSocket
//     function sendMessage() {
//         console.log('sending');
//         if (message) {
//             createMessageArray('me', 'me', message);
//             // const name = document.querySelector('#my-name').value;
//             socket.send(`{"name":"${userName}", "msg":"${message}"}`);
//             // setMessage('');
//         }
//     }

// // Create one long list of messages
//     function appendMsg(cls, from, msg) {
    
//       messages.push(
//         <div><span className={cls}>{from}</span>{`: ${msg}`}</div>
//       );
//     setMsgList(messages);
//     console.log(messages);
//     // return messages;
//     }


    // const chatText = document.querySelector('#chat-text');
    // chatText.innerHTML =
    // `<div><span class="${cls}">${from}</span>: ${msg}</div>`
    //  + chatText.innerHTML;


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
            onChange={(e) => {setMessage(e.target.value)}}
            // 
            placeholder='I love you...'
          />
          <button onClick={() => GameNotifier.broadcastEvent(userName, message, setMessage)} className="btn btn-primary">Send</button>
        </fieldset>
        <div className="chat-text">{createMessageArray()}</div>
      </main>
    );
}

//     const userName = props.userName;

//   const [events, setEvent] = React.useState([]);

//   React.useEffect(() => {
//     GameNotifier.addHandler(handleGameEvent);

//     return () => {
//       GameNotifier.removeHandler(handleGameEvent);
//     };
//   });

//   function handleGameEvent(event) {
//     setEvent([...events, event]);
//   }

//   function createMessageArray() {
//     const messageArray = [];
//     for (const [i, event] of events.entries()) {
//       let message = 'unknown';
//       if (event.type === GameEvent.End) {
//         message = `scored ${event.value.score}`;
//       } else if (event.type === GameEvent.Start) {
//         message = `started a new game`;
//       } else if (event.type === GameEvent.System) {
//         message = event.value.msg;
//       }

//       messageArray.push(
//         <div key={i} className='event'>
//           <span className={'player-event'}>{event.from.split('@')[0]}</span>
//           {message}
//         </div>
//       );
//     }
//     return messageArray;
//   }

//   return (
//     <div className='players'>
//       Player
//       <span className='player-name'>{userName}</span>
//       <div id='player-messages'>{createMessageArray()}</div>
//     </div>
//   );
// }