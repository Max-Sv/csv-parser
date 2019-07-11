"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var sequelize = new Sequelize('csv-parser', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING
    },
    Surname: {
        type: Sequelize.STRING
    },
    Mail: {
        type: Sequelize.STRING
    },
    Date: {
        type: Sequelize.STRING
    },
    Phone: {
        type: Sequelize.STRING
    },
}, {
// options
});
function addUser(obj) {
    exports.User.sync({ force: true }).then(function () {
        // Now the `users` table in the database corresponds to the model definition
        return exports.User.create({
            id: obj.ID,
            Name: obj.Name,
            Surname: obj.Surname,
            Mail: obj.Mail,
            Date: obj["Date of Registration"],
            Phone: obj.Phone
        });
    });
}
exports.addUser = addUser;
//# sourceMappingURL=dbConnect.js.map