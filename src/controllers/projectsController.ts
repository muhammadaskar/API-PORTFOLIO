import { RequestHandler } from "express";

import { Projects } from "../models/projects";

export const createProject: RequestHandler = async (req, res, next) => {
    var projects = await Projects.create({ ...req.body });
    return res
        .status(200)
        .json(
            {
                success: true,
                message: "Project created successfully",
                data: projects
            });
};

export const deleteProject: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedProject: Projects | null = await Projects.findByPk(id);
    await Projects.destroy({ where: { id } });
    return res
        .status(200)
        .json(
            {
                success: true,
                message: "Project deleted successfully",
                data: deletedProject
            });
};

export const getAllProject: RequestHandler = async (req, res, next) => {
    const allProjects: Projects[] = await Projects.findAll();
    return res
        .status(200)
        .json(
            {
                success: true,
                message: "Project fetched successfully",
                data: allProjects
            });
};

export const getProjectById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const projects: Projects | null = await Projects.findByPk(id);
    return res
        .status(200)
        .json(
            {
                success: true,
                message: "Project fetched successfully",
                data: projects
            });
};

export const updateProject: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await Projects.update({ ...req.body }, { where: { id } });
    const updatedProjects: Projects | null = await Projects.findByPk(id);
    return res
        .status(200)
        .json(
            {
                success: true,
                message: "Project updated successfully",
                data: updatedProjects
            });
};