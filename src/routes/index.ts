import express from "express";
import projectsRouter from "./projectsRouter";

const app = express.Router()

app.get('/', function (req, res) {
    return res.status(200).json({
        success: true,
        message: 'this is api for portfolio'
    })
})
app.use('/projects', projectsRouter)

export default app