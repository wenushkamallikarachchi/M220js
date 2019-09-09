"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor() {
        this.headers = {};
        this.headersSent = false;
        this.locals = {};
        this.append = jest.fn(() => this);
        this.attachment = jest.fn(() => this);
        this.cookie = jest.fn(() => this);
        this.clearCookie = jest.fn(() => this);
        this.download = jest.fn();
        this.end = jest.fn();
        this.format = jest.fn(() => this);
        this.get = jest.fn();
        this.header = jest.fn((key, value) => {
            if (typeof value === 'string') {
                this.set(key, value);
            }
            else {
                this.set(key);
            }
            return this;
        });
        this.json = jest.fn();
        this.jsonp = jest.fn();
        this.links = jest.fn(() => this);
        this.location = jest.fn(() => this);
        this.redirect = jest.fn();
        this.render = jest.fn();
        this.send = jest.fn(() => this);
        this.sendFile = jest.fn();
        this.sendStatus = jest.fn();
        this.set = jest.fn((key, value) => {
            if (typeof key === 'string') {
                this.setHeader(key, value);
            }
            else {
                for (const k of Object.keys(key)) {
                    this.set(k, key[k]);
                }
            }
            return this;
        });
        this.setHeader = jest.fn((key, value) => {
            this.headers[key] = value;
            return this;
        });
        this.status = jest.fn(() => this);
        this.type = jest.fn(() => this);
        this.vary = jest.fn(() => this);
        return this;
    }
    getHeader(key) {
        return this.headers[key];
    }
    setHeadersSent(value) {
        this.headersSent = value;
    }
    setLocals(key, value) {
        this.locals[key] = value;
    }
    resetMocked() {
        this.headers = {};
        this.headersSent = false;
        this.locals = {};
        this.append.mockReset();
        this.attachment.mockReset();
        this.cookie.mockReset();
        this.clearCookie.mockReset();
        this.download.mockReset();
        this.end.mockReset();
        this.format.mockReset();
        this.get.mockReset();
        this.header.mockReset();
        this.json.mockReset();
        this.jsonp.mockReset();
        this.links.mockReset();
        this.location.mockReset();
        this.redirect.mockReset();
        this.render.mockReset();
        this.send.mockReset();
        this.sendFile.mockReset();
        this.sendStatus.mockReset();
        this.set.mockReset();
        this.setHeader.mockReset();
        this.status.mockReset();
        this.type.mockReset();
        this.vary.mockReset();
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map