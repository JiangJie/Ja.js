'use strong';

import fs from 'fs';
import path from 'path';
import http2 from 'http2';

const server = http2.createServer({
    key: fs.readFileSync(path.resolve(__dirname, '../ssl/ja.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../ssl/ja.crt'))
}, (req, res) => {
    console.log(`req.httpVersion ${req.httpVersion} req.url ${req.url}`);

    res.writeHead(200);

    res.end(JSON.stringify({hello: 'world'}));
});

server.listen(10000, () => {
    console.log('listening');
});