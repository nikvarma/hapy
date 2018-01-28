import { DateTime } from "ionic-angular/components/datetime/datetime";

export class BaseModel {
    id: string;
    status: boolean;
    blocked: boolean;
    createdID: string;
    modifidedID: string;
    createdDateTime: DateTime;
    modifidedDateTime: DateTime;
}