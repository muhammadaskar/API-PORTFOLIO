"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const projects_1 = require("../models/projects");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "db_portfolio",
    logging: false,
    models: [projects_1.Projects],
});
exports.default = connection;
