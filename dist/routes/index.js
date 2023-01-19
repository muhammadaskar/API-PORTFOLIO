"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectsRouter_1 = __importDefault(require("./projectsRouter"));
const app = express_1.default.Router();
app.get('/', function (req, res) {
    return res.status(200).json({
        success: true,
        message: 'this is api for portfolio'
    });
});
app.use('/projects', projectsRouter_1.default);
exports.default = app;
