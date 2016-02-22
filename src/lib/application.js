'use strong';

import http2 from 'http2';

export default function app(option) {
    const ja = new Ja(option);

    return ja;
}

class Ja {
    constructor(option = {}) {
        this.middlewares = [];

        this.server = http2.createServer(option, this.callback);

        this.listen = this.server.listen.bind(this.server);
    }

    use(fn) {
        this.middlewares.push(fn);
    }

    get callback() {
        return (req, res) => {
            const ctx = {req, res};
            for(const fn of this.middlewares) fn(ctx);
        }
    }
}