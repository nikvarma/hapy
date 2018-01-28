import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseDB {
    constructor(private storage: Storage) {

    }

    insertToDB(key: string, value: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.storage.set(key, value).then((res) => {
                resolve(true);
            }).catch((e) => {
                console.log(e);
                resolve(e);
            });
        });
    }

    selectFromDB(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.storage.get(key).then((res) => {
                console.log(res);
                resolve(res);
            }).catch((e) => {
                console.log(e);
                resolve(e);
            });
        });
    }

    dbClear(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.storage.clear().then((res) => {
                resolve(res);
            }).catch((e) => {
                resolve(e);
            });
        });
    }

    getLength(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.storage.length().then((res) => {
                resolve(res);
            }).catch((e) => {
                resolve(e);
            });
        });
    }
}