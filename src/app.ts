import express from "express";
import routes from "./routes/index";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express();

app.use(
    cors({
        origin: "*",
    })
);

app.use(json());

app.use(urlencoded({ extended: true }));
app.use(routes);

app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.status(500).json({ message: err.message });
    }
);

connection
    .sync()
    .then(() => {
        console.log("Database successfully connected");
    })
    .catch((err) => {
        console.log("Error", err);
    });

const PORT = process.env.APP_PORT

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});