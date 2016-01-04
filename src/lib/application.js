'use strong';

import http2 from 'http2';

export default function app(option = {}) {
    const server = http2.createServer(option, (req, res) => {
        console.log(`req.httpVersion ${req.httpVersion} req.url ${req.url}`);

        res.writeHead(200);

        const i = Math.random();

        res.end(JSON.stringify({hello: i}));
    });

    return server;
}