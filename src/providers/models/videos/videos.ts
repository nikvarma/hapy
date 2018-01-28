import { BaseModel } from "../base/base";
import { Locations } from "../locations/locations";
import { Countrys } from "../countrys/countrys";

export class Videos extends BaseModel {
    name: string;
    path: string;
    size: number;
    unit: string;
    location: Locations;
    country: Countrys;
}