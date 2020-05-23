const express = require('express');
const http = require('http');


const SERVER_PORT = process.env.PORT || 3000;
console.log('Set port', SERVER_PORT);

const app = express();
const server = http.Server(app);
console.log('Define server');


app.set('port', SERVER_PORT);
app.use('/', express.static(__dirname + '/client'));
console.log('Define root');


app.get('/healt', (_req, res) => {
	res.send('OK');
});
console.log('Define healt check');


server.listen(SERVER_PORT, () => console.log(`Starting server on port ${SERVER_PORT}`));
console.log('Listening');
