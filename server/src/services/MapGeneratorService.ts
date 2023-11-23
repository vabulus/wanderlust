import * as fs from "fs";

export async function generateMapCoordinates(countryCode: string) {
    try {
        return await extractGeoData(countryCode);
    } catch (err) {
        console.error("Error generating map", err);
    }
}

async function extractGeoData(countryCode: string){
    const filePath = '/home/fabio/Documents/50-59 Tech/50 Projects/51.02 PhpStorm/wanderlust/server/src/data/geojson/archive/countries.geojson';
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err: any, data: string) => {
            if (err) {
                console.error("Error reading the file", err);
                return;
            }

            const countries = JSON.parse(data);
            const austriaGeoJSON = countries.features.find((feature: any) => feature.properties['ISO_A3'] === countryCode.toUpperCase());

            if (austriaGeoJSON) {
                console.log(austriaGeoJSON);
                resolve(austriaGeoJSON);
            } else {
                console.log("Austria's data not found");
                reject("Austria's data not found");
            }
        });
    });
}