// script.js

let ws = new WebSocket("wss://websocket-1.onrender.com/:443");

let controllText = document.querySelector('.controllText');

controllText.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 'command': controllText.value }));
}, false);

ws.addEventListener('open', (event) => {
  console.log('WebSocket 连接已打开！');
  ws.send('pong');
});

ws.addEventListener('error', (error) => {
  console.error('连接出现错误', error);
  alert('连接 WebSocket 服务器时出现错误', error);
});

ws.addEventListener('close', (event) => {
  console.log('WebSocket 连接已关闭');
  alert('关闭 WebSocket 服务器');
});
