import { Sequelize } from "sequelize-typescript";
import { Projects } from "../models/projects";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "db_portfolio",
    logging: false,
    models: [Projects],
});

export default connection;