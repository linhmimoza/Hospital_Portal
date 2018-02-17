import { Injectable } from "@angular/core";
import { ApiService } from "../../../api.service";
import { Unit } from "./../shared/unit.model";

@Injectable()

export class UnitService {
    constructor(private apiService: ApiService) { }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getUnits', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUnit(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getUnit/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        });
    }

    saveUnit(unit: Unit) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveUnit', unit).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}