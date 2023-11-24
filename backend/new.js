// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify({ name: 'rishi', email: 'rishi.soni@mail.com' }));
//     res.end();
// }).listen(5000);


// add file and remove
// const fs = require('fs');


// let input = process.argv;

// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.log('This is a ivalid input');
// }
// console.log(__dirname);

const path = require('path');
console.log(path);





