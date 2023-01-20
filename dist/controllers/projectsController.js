"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProject = exports.getProjectById = exports.getAllProject = exports.deleteProject = exports.createProject = void 0;
const slug_1 = require("../helper/slug");
const projects_1 = require("../models/projects");
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, objective, tools, link, image, category } = req.body;
    const projects = yield projects_1.Projects.create({
        name: name,
        slug: (0, slug_1.slug)(name),
        description: description,
        objective: objective,
        tools: tools,
        link: link,
        image: image,
        category: category
    });
    return res
        .status(200)
        .json({
        success: true,
        message: "Project created successfully",
        data: projects
    });
});
exports.createProject = createProject;
const deleteProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedProject = yield projects_1.Projects.findByPk(id);
    yield projects_1.Projects.destroy({ where: { id } });
    return res
        .status(200)
        .json({
        success: true,
        message: "Project deleted successfully",
        data: deletedProject
    });
});
exports.deleteProject = deleteProject;
const getAllProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allProjects = yield projects_1.Projects.findAll();
    return res
        .status(200)
        .json({
        success: true,
        message: "Project fetched successfully",
        data: allProjects
    });
});
exports.getAllProject = getAllProject;
const getProjectById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const projects = yield projects_1.Projects.findByPk(id);
    return res
        .status(200)
        .json({
        success: true,
        message: "Project fetched successfully",
        data: projects
    });
});
exports.getProjectById = getProjectById;
const updateProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, objective, tools, link } = req.body;
    yield projects_1.Projects.update({
        name: name,
        slug: (0, slug_1.slug)(name),
        description: description,
        objective: objective,
        tools: tools,
        link: link
    }, { where: { id } });
    const updatedProjects = yield projects_1.Projects.findByPk(id);
    return res
        .status(200)
        .json({
        success: true,
        message: "Project updated successfully",
        data: updatedProjects
    });
});
exports.updateProject = updateProject;
