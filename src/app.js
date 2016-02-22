'use strong';

import fs from 'fs';
import path from 'path';

import Ja from './lib/application';

const app = Ja({
    key: fs.readFileSync(path.resolve(__dirname, '../ssl/ja.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../ssl/ja.crt'))
});

// app.use((req, res) => {
//     console.log(`req.httpVersion ${req.httpVersion} req.url ${req.url}`);

//     res.writeHead(200);

//     // const i = Math.random();
//     const i = await Promise.resolve(1);

//     res.end(JSON.stringify({hello: i}));
// });

app.use(async ({req, res}) => {
    console.log(`req.httpVersion ${req.httpVersion} req.url ${req.url}`);

    res.writeHead(200);

    // const i = Math.random();
    const i = await Promise.resolve(1);

    res.end(JSON.stringify({hello: i}));
});

app.listen(10000, () => {
    console.log('listening');
});