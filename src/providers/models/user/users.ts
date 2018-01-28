import { BaseModel } from "../base/base";
import { Locations } from "../locations/locations";
import { Countrys } from "../countrys/countrys";


export class UsersTagged extends BaseModel {
    name: string;
    taggedByID: string;
    taggedByName: string;
}

export class UsersModel extends UsersTagged {
    role: string;
    roleID: number;
    location: Locations;
    country: Countrys;
    gender: string;
    marrideStatus: string;
    emailID: string;
    contactNumber: number;
    genratedID: string;
    genratedEmailID: string;
    accessNumber: number;
    accessEmailID: string;
}
