"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var csvParser_1 = __importDefault(require("./csvParser"));
var port = process.env.PORT || 8081;
App_1.default.listen(port, function (err) {
    if (err)
        console.log("Error");
});
var csvFilePath = 'C:/mifort/CSV-Parser/src/Data.csv';
var parserParameters = {
    delimiter: ';',
    ignoreEmpty: true
};
var parser = new csvParser_1.default(csvFilePath);
var csvObjects = parser.getObjects(parserParameters);
//# sourceMappingURL=index.js.map