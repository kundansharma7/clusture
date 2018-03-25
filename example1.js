const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const cron = require('./auto-cron')(0);
const fs = require('fs');
// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  // http.createServer((req, res) => {
  //   res.writeHead(200);
  //   res.end('hello world\n');
  // }).listen(8000);


const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!!!!!'));
app.get('/app', (req, res) => {
	fs.readFile('dddd', (err, data) => {
		if(err) {
			throw err;
		}
	});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));

  console.log(`Worker ${process.pid} started`);
//}