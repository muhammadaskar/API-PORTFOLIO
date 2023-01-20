import { RequestHandler } from "express";
import { slug } from "../helper/slug";

import { Projects } from "../models/projects";

export const createProject: RequestHandler = async (req, res, next) => {
    const { name, description, objective, tools, link, image, category } = req.body
    const projects = await Projects.create({
        name: name,
        slug: slug(name),
        description: description,
        objective: objective,
        tools: tools,
        link: link,
        image: image,
        category: category
    });
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
    const { name, description, objective, tools, link } = req.body
    await Projects.update({
        name: name,
        slug: slug(name),
        description: description,
        objective: objective,
        tools: tools,
        link: link
    }, { where: { id } });
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