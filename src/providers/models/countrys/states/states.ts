import { BaseModel } from "../../base/base";
import { Citys } from "../citys/citys";

export class States extends BaseModel {
    name: string;
    citys: Citys[] = [];
}