import { PORT } from "./config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mapGeneratorRoutes from "./routes/mapGeneratorRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", mapGeneratorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});