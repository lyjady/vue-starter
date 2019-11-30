const http = require('http');
const urlModule = require('url');
const server = http.createServer();
server.on('request', function (req, res) {
    const {pathname: url, query} = urlModule.parse(req.url, true);
    if (url === '/getScript') {
        let person = {
            name: 'Rose',
            age: 12
        };
        const scriptStr = `${query.callback}(${JSON.stringify(person)})`;
        res.end(scriptStr);
    } else {
        res.end('404');
    }
});
server.listen(3000, function () {
    console.log('server listen at http://127.0.0.1:3000');
});