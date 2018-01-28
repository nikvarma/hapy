import { BaseModel } from "../base/base";
import { Locations } from "../locations/locations";
import { Countrys } from "../countrys/countrys";

export class Images extends BaseModel {    
    path: string;
    size: number;
    unit: string;
    name: string;
    location: Locations;
    country: Countrys;
}