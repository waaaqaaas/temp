// const os = require('os')
// const path  = require('path')
// const {readFileSync , writeFileSync}  =  require('fs')



// // // const {jhon} = require('./variables.js');
// // const sayHi = require('./utils.js');
// // const data = require('./variables.js');
// // const { log } = require('console');
// //  console.log(data);
// // sayHi("gib");
// // console.log(`uptime =  ${os.uptime}`);
// // console.log(path.sep);
// //  const filepath  =  path.join('/subfolder','text.txt')
// //  console.log(filepath);

// // const text =  readFileSync('./subfolder/text.txt','utf8');
// // writeFileSync('./subfolder/new.txt',' same to you mf')
// // console.log(text);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h1>Welcome to the Main Page</h1><p>This is the main page of our website.</p>');
//     } else if (req.url === '/about') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h1>About Us</h1><p>Learn more about our company and team here.</p>');
//     } else if (req.url === '/contact') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h1>Contact Us</h1><p>Feel free to reach out to us with any questions or inquiries.</p>');
//     } else {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h1>Page Not Found</h1><p>Sorry, the page you requested does not exist.</p>');
//     }
// });

// server.listen(3000);