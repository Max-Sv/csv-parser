"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config = __importStar(require("./config"));
var writer = __importStar(require("./writeFile"));
var db = __importStar(require("./dbConnect"));
var Validator = /** @class */ (function () {
    function Validator(obj) {
        var _this = this;
        this.fs = require('fs');
        this.regExps = {
            ID: /^[0-9]+$/,
            Mail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            Phone: /^(\+375|375|80)\s*(25|29|33|44)\s*(([0-9]{7})|[0-9]{3}( [0-9]{2}){2})$/,
        };
        this.obj = obj;
        this.isCorrect = true;
        this.invalidData = [];
        var i = 0;
        var _loop_1 = function (key) {
            if (obj.hasOwnProperty(key)) {
                if (typeof (config.csv[i].type) == "object") {
                    this_1.correctObj(this_1.match(key, obj[key]), key);
                }
                config.csv[i].validators.forEach(function (item) {
                    _this.correctObj(item.validate(obj[key]), key);
                });
                // console.log(`${key} = ${this.obj[key as keyof forObj]}`);
                i++;
            }
        };
        var this_1 = this;
        for (var key in obj) {
            _loop_1(key);
        }
        this.sendObj();
    }
    Validator.prototype.match = function (key, param) {
        if (this.regExps[key].test(param))
            return [];
        return ['Data entered incorrectly'];
    };
    ;
    Validator.prototype.correctObj = function (err, key) {
        if (err.length != 0) {
            this.isCorrect = false;
            this.obj[key] += " <- " + err;
            this.invalidData.push(key);
        }
    };
    Validator.prototype.sendObj = function () {
        if (!this.isCorrect) {
            console.log("INVALID OBJECT - " + JSON.stringify(this.obj));
            console.log("INVALID FIELDS: " + this.uniqueArr(this.invalidData).join(', '));
            console.log('\n');
            writer.writeFile("INVALID OBJECT - " + JSON.stringify(this.obj));
            writer.writeFile("INVALID FIELDS: " + this.uniqueArr(this.invalidData).join(', '));
            writer.writeFile('\n');
        }
        else {
            db.addUser(this.obj);
        }
    };
    Validator.prototype.uniqueArr = function (arr) {
        return arr.filter(function (elem, index, self) { return index === self.indexOf(elem); });
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=Validator.js.map