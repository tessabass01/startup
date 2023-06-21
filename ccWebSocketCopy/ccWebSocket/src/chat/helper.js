const Types = {
    Connected: 'connected',
    Disconnected: 'disconnected',
    Friend: 'friend',
    Me: 'me'
  };

class EventMessage {
    constructor(cls, from, msg, type) {
      this.cls = cls;
      this.from = from;
      this.msg = msg;
      this.type = type;
    }
  }

class Websocks {
    events = [];
    handlers = [];
  
    constructor() {
      let port = window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
      this.socket.onopen = (event) => {
        // this.receiveEvent('system', 'websocket', 'connected');
        this.receiveEvent(new EventMessage('system', 'websocket', 'connected', Types.Connected));
      };
      this.socket.onclose = (event) => {
        this.receiveEvent(new EventMessage('system', 'websocket', 'disconnected', Types.Disconnected));      
    };
      this.socket.onmessage = async (event) => {
        try {
          const chat = JSON.parse(await event.data.text());
          this.receiveEvent(new EventMessage('friend', chat.name, chat.msg, Types.Friend));
        //   this.receiveEvent('friend', chat.name, chat.msg);
        } catch {}
      };
    }
  
    broadcastEvent(userName, message, fn) {
    //   const event = new EventMessage(from, type, value);
    //   this.receiveEvent('me', 'me', message);
      this.receiveEvent(new EventMessage('me', 'me', message, Types.Me));
      this.socket.send(`{"name":"${userName}", "msg":"${message}"}`);
      fn('');
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  
    removeHandler(handler) {
      this.handlers.filter((h) => h !== handler);
    }
  
    receiveEvent(event) {
        this.events.push(event);
    
        this.events.forEach((e) => {
          this.handlers.forEach((handler) => {
            handler(e);
          });
        });
      }
    }
  
  const GameNotifier = new Websocks();
  export { Types, GameNotifier };