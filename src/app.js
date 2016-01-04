'use strong';

import fs from 'fs';
import path from 'path';

import Ja from './lib/application';

const app = Ja({
    key: fs.readFileSync(path.resolve(__dirname, '../ssl/ja.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../ssl/ja.crt'))
});

app.listen(10000, () => {
    console.log('listening');
});