import { ApiService } from '../../../api.service';
import { Injectable } from '@angular/core';
import { Select } from '../share/select.model';
import { User } from '../../user/shared/user.model';
import { MissionWorker } from '../../mission/shared/missionWorker.model';
@Injectable()
export class SelectService {
    constructor(private apiService: ApiService) { }

    pustItem(item: Select, list: Select[]) {
      list.push(item);
      return list;

    }
     setItem(item: Select, id: number, name: String) {
item.id = id;
item.itemName = name;
return item;
     }
     userSelect(users: any[], list: Select[]) {
       let item: Select;
      users.forEach(function(user) {
        item = {'id': user.userId, 'itemName': user.userName};
        list.push(item);
      });
      return list;
     }
     selectToWorker(list: Select[], workers: MissionWorker[], missionId: number) {
       workers = [];
       let worker: MissionWorker;
       list.forEach(function(item) {
        worker = {'userId': item.id, 'userName': item.itemName, 'missionId': missionId, 'missionWorkerId': 0};
        workers.push(worker);
       });
       console.log(workers);
       return workers;
     }
 }
