import { BaseModel } from "../base/base";
import { States } from "./states/states";

export class Countrys extends BaseModel {
    name: string;
    code: number;
    shortCode: string;
    flagURL: string;
    states: States[] = [];
}