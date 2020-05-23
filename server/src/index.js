const express = require('express');
const http = require('http');


const SERVER_PORT = process.env.PORT || 3000;

const app = express();
const server = http.Server(app);


app.set('port', SERVER_PORT);
app.use('/', express.static(__dirname + '/client'));


app.get('/healt', (_req, res) => {
	res.send('OK');
});


server.listen(SERVER_PORT, () => console.log(`Starting server on port ${SERVER_PORT}`));
