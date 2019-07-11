"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function writeFile(text) {
    fs.appendFileSync("invalidUsers.txt", text, function (error) {
        if (error)
            throw error;
    });
}
exports.writeFile = writeFile;
//# sourceMappingURL=writeFile.js.map