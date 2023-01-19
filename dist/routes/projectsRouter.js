"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectsController_1 = require("../controllers/projectsController");
const router = (0, express_1.Router)();
router.post("/", projectsController_1.createProject);
router.get("/", projectsController_1.getAllProject);
router.get("/:id", projectsController_1.getProjectById);
router.put("/:id", projectsController_1.updateProject);
router.delete("/:id", projectsController_1.deleteProject);
exports.default = router;