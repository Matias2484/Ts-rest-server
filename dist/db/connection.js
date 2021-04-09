"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('node', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    //Logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map