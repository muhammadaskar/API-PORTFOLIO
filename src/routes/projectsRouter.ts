import { Router } from "express";

import {
    createProject,
    deleteProject,
    getAllProject,
    updateProject,
    getProjectById,
} from "../controllers/projectsController";

const router = Router();

router.post("/", createProject);

router.get("/", getAllProject);

router.get("/:id", getProjectById);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;