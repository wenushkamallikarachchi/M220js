"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = require("./next");
const request_1 = require("./request");
const response_1 = require("./response");
class Router {
    constructor() {
        const handler = (path, ...callbacks) => {
            const flattened = [].concat(...callbacks);
            if (typeof path === 'string' && flattened.every((cb) => typeof cb === 'function')) {
                flattened.forEach((cb) => cb(this.request, this.response, this.next));
            }
            else {
                path(this.request, this.response, this.next);
            }
        };
        const del = jest.fn(handler).mockName('del');
        const get = jest.fn(handler).mockName('get');
        const patch = jest.fn(handler).mockName('patch');
        const post = jest.fn(handler).mockName('post');
        const put = jest.fn(handler).mockName('put');
        this.request = new request_1.Request();
        this.response = new response_1.Response();
        this.next = next_1.next;
        this.param = jest.fn();
        this.all = jest.fn();
        this.use = jest.fn();
        this.delete = del;
        this.get = get;
        this.post = post;
        this.put = put;
        this.patch = patch;
        this.route = jest.fn((path) => {
            return {
                delete(cb) {
                    del(path, cb);
                    return this;
                },
                get(cb) {
                    get(path, cb);
                    return this;
                },
                patch(cb) {
                    patch(path, cb);
                    return this;
                },
                post(cb) {
                    post(path, cb);
                    return this;
                },
                put(cb) {
                    put(path, cb);
                    return this;
                },
            };
        });
        return this;
    }
    resetMocked() {
        this.all.mockReset();
        this.get.mockReset();
        this.param.mockReset();
        this.route.mockReset();
        this.use.mockReset();
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map