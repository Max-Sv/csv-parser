"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as express from 'express'
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        console.log(router);
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.app.use('/', router);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=App.js.map