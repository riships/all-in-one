const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(JSON.stringify({ name: 'rishi', email: 'rishi.soni@mail.com' }));
    res.end();
}).listen(5000);


// add file and remove
const fs = require('fs');


let input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
} else {
    console.log('This is a ivalid input');
}
console.log(__dirname);

const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`

// this is the func for add and write the content in file
fs.writeFileSync(filePath, 'This is sample for creating files using fs');

// this is for the reading the content of the file
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})


// this is the func or method to add the content to the file whih we have already created

fs.appendFile(filePath, ' and i am updating the content for my test case', (err) => {
    if (!err) {
        console.log('file is updated');
    }
})

// this is  the func or method to rename the file

fs.rename(filePath, `${dirPath}/myDemo.txt`, (err) => {
    if (!err) {
        console.log('File Renamed');
    }
})

// this is the method to delete the file

fs.unlinkSync(`${dirPath}/myDemo.txt`, (err) => {
    if (!err) {
        console.log('The file is deleted');
    } else {
        console.log('This is an error');
    }
});




