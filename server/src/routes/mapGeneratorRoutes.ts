import express from "express";
import MapGeneratorController from "../controllers/mapGeneratorController";


const router = express.Router();
router.get("/geojson/:code", MapGeneratorController.generateMap);

export default router;
