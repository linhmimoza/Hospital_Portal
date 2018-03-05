import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Room } from '../shared/room.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class RoomService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListRoom').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getRoom(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getRoomById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateRoom(room: Room){
        return new Promise((resolve, reject) => {
            this.apiService.post('updateRoom', room).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    createRoom(room: Room){
        return new Promise((resolve, reject) => {
            this.apiService.post('createRoom', room).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    // deleteRoom(id){
    //     return new Promise((resolve, reject) => {
    //         this.apiService.get(`deleteRoom/${id}`).then(res => {
    //             resolve();
    //         }).catch(err => {
    //             reject(err);
    //         });
    //     });
    // }
}