import { Countrys } from "./countrys/countrys";

export class BaseLogin {
    username: string;
    password: string;
    loginWith: boolean;
}

export class LoginVerification {

}

export class Continents {
    name: string;
    callingCodes: any[];
}

export class UserShortInfo {
    name: string;
    image: string;
    cropImage: string;
    country: Countrys;
    statusQuote: string;
}