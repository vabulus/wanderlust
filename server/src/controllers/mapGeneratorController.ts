import type { NextFunction, Request, Response } from "express";
import {generateMapCoordinates} from "../services/MapGeneratorService";

export default class MapGeneratorController {
    static generateMap = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const countryCode = req.params.code;
            const map = await generateMapCoordinates(countryCode);
            return res.status(200).json(map);
        } catch (e) {
            console.log(e);
        }
    };

}