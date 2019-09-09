"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
const express_1 = require("./express");
const next_1 = require("./next");
const request_1 = require("./request");
const response_1 = require("./response");
const router_1 = require("./router");
exports = module.exports = createApplication;
function createApplication() {
    return new express_1.Express();
}
exports.Express = express_1.Express;
exports.Response = response_1.Response;
exports.Request = request_1.Request;
exports.Next = next_1.next;
exports.Router = () => new router_1.Router();
const application = new application_1.Application();
exports.json = application.json;
exports.query = application.query;
exports.static = application.staticLoad;
exports.urlencoded = application.urlencoded;
exports.resetMocked = application.resetMocked;
//# sourceMappingURL=index.js.map