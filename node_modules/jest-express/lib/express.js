"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = require("./next");
const request_1 = require("./request");
const response_1 = require("./response");
class Express {
    constructor() {
        this.request = new request_1.Request(null, { app: this });
        this.response = new response_1.Response();
        this.next = next_1.next;
        this.locals = {};
        this.error = {};
        this.mountpath = '';
        this.setting = {};
        this.all = jest.fn();
        this.delete = jest.fn();
        this.disable = jest.fn((key) => {
            this.setting[key] = false;
        });
        this.disabled = jest.fn((key) => {
            return this.setting[key] === false;
        });
        this.enable = jest.fn((key) => {
            this.setting[key] = true;
        });
        this.enabled = jest.fn((key) => {
            return this.setting[key] === true;
        });
        this.engine = jest.fn();
        this.listen = jest.fn();
        this.head = jest.fn();
        this.post = jest.fn();
        this.put = jest.fn();
        this.connect = jest.fn();
        this.options = jest.fn();
        this.trace = jest.fn();
        this.patch = jest.fn();
        this.param = jest.fn();
        this.path = jest.fn();
        this.render = jest.fn();
        this.use = jest.fn((func) => {
            if (typeof func === 'function' && func.length === 3) {
                return func(this.request, this.response, this.next);
            }
            if (typeof func === 'function' && func.length === 4) {
                return func(this.error, this.request, this.response, this.next);
            }
            return;
        });
        this.get = jest.fn((path, ...callbacks) => {
            if (typeof path === 'string' && callbacks.length === 0) {
                return this.setting[path];
            }
            const flattened = [].concat(...callbacks);
            if (typeof path === 'string' && flattened.every((cb) => typeof cb === 'function')) {
                return flattened.length === 1 ?
                    flattened[0](this.request, this.response)
                    : flattened.map((cb) => cb(this.request, this.response));
            }
            return path(this.request, this.response);
        });
        this.route = jest.fn(() => {
            return {
                delete: this.delete,
                get: this.get,
                post: this.post,
                put: this.put,
            };
        });
        this.set = jest.fn((key, value) => {
            this.setting[key] = value;
        });
        return this;
    }
    setMountPath(value) {
        this.mountpath = value;
    }
    setLocals(key, value) {
        this.locals[key] = value;
    }
    setError(key, value) {
        this.error[key] = value;
    }
    resetMocked() {
        this.locals = {};
        this.error = {};
        this.mountpath = '';
        this.all.mockReset();
        this.delete.mockReset();
        this.disable.mockReset();
        this.disabled.mockReset();
        this.enable.mockReset();
        this.enabled.mockReset();
        this.engine.mockReset();
        this.listen.mockReset();
        this.head.mockReset();
        this.post.mockReset();
        this.put.mockReset();
        this.connect.mockReset();
        this.options.mockReset();
        this.trace.mockReset();
        this.patch.mockReset();
        this.param.mockReset();
        this.path.mockReset();
        this.render.mockReset();
        this.use.mockReset();
        this.get.mockReset();
        this.route.mockReset();
        this.set.mockReset();
        this.request.resetMocked();
        this.response.resetMocked();
        this.next.mockReset();
        this.setting = {};
    }
}
exports.Express = Express;
//# sourceMappingURL=express.js.map