const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws => {
   ws.send(JSON.stringify({
     text: 'Добро пожаловать',
     author: 'Server',
     datetime: new Date().getTime(),
   }));

   ws.on('message', message => {
       if (message.includes('exit')) {
           server.clients.forEach(client => {
               if (client.readyState === WebSocket.OPEN) {
                   const clientMessage = JSON.parse(message);
                   const serverMessage = {
                       text: `${clientMessage.author} has been disconnected`,
                       author: 'server',
                       datetime: new Date().getTime(),
                   };
                   client.send(JSON.stringify(serverMessage));
               }
           });
           ws.close();
       } else {
           server.clients.forEach(client => {
               if (client.readyState === WebSocket.OPEN) {
                   client.send(message);
               }
           })
       }
   });
});
