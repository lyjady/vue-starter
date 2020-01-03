const fs = require('fs');
const path = require('path');

function readFileContent(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data)
        })
    })
}

readFileContent('./1.txt').then(function (data) {
    console.log(data);
    return readFileContent('./2.txt').then(function (data) {
        console.log(data);
        return readFileContent('./3.txt').then(function (data) {
            console.log(data);
        })
    })
}).catch(function (err) {
    console.log('发生错误: ' + err)
});

