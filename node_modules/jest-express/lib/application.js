"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Application {
    constructor() {
        this.json = jest.fn();
        this.staticLoad = jest.fn();
        this.query = jest.fn();
        this.urlencoded = jest.fn();
        return this;
    }
    resetMocked() {
        this.json.mockReset();
        this.staticLoad.mockReset();
        this.query.mockReset();
        this.urlencoded.mockReset();
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map