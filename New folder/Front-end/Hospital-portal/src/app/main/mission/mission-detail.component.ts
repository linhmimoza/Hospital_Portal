import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { MissionService } from './service/mission.service';
import { Mission } from './shared/mission.model';
import { UserService } from '../user/service/user.service';
import { User } from '../user/shared/user.model';
import { Select } from '../select/share/select.model';
import { SelectService } from '../select/service/select.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
    selector: 'mission-detail',
    templateUrl: './mission-detail.component.html'
})
export class MissionDetailComponent {
    dropdownList: Select [] = [] ;
    selectedItems = [];
    dropdownSettings = {};
    mission = new Mission();
    routerSubcription: any;
    id = 0;
    title: string;
    member: User[] = [];
    users: User[] = [];
    userItem: Select;
    missions: Mission[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private missionService: MissionService
        , private userService: UserService, private selectService: SelectService) {

    }
    back() {
        this.router.navigate(['/main/manage-mission']);
    }

    ngOnInit() {
        this.loadPage();
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.missionService.getList().then((missions: Mission[]) => {
                this.missions = missions;
                if (this.id == 0) { this.mission.missionId = missions[0].missionId; }
            });
            if (this.id > 0) {
                this.title = "You are updating mission";
                this.missionService.getMission(this.id).then((res: Mission) => {
                    this.mission = res;
                    this.selectService.userSelect(res.missionWorkerList, this.selectedItems);
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "You are creating new mission";
            }
        });
    }
createMenber() {

    // this.dropdownList = [
    //     {'id':1,'itemName': 'India'},
    //     {"id":2,"itemName":"Singapore"},
    //     {"id":3,"itemName":"Australia"},
    //     {"id":4,"itemName":"Canada"},
    //     {"id":5,"itemName":"South Korea"},
    //     {"id":6,"itemName":"Germany"},
    //     {"id":7,"itemName":"France"},
    //     {"id":8,"itemName":"Russia"},
    //     {"id":9,"itemName":"Italy"},

    //   ];
     
// this.selectedItems = [
//           {"id":2,"itemName":"Singapore"},
//           {"id":3,"itemName":"Australia"},
//           {"id":4,"itemName":"Canada"},
//           {"id":5,"itemName":"South Korea"}
//       ];
this.dropdownSettings = {
            singleSelection: false,
            text:"Select Countries",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:"myclass custom-class"
          };
}
onItemSelect(item: any) {
console.log(item);
console.log(this.selectedItems);


}
OnItemDeSelect(item: any) {
console.log(item);
console.log(this.selectedItems);
}
onSelectAll(items: any) {
console.log(items);
}
onDeSelectAll(items: any) {
console.log(items);
}

loadPage() {
    this.createMenber();
    this.loadUser();

}
    loadUser() {
        this.userService.getList().then((users: User[]) => {
            this.users = users;
            this.selectService.userSelect(users, this.dropdownList);
        });

    }
    save(){
        this.mission.missionWorkerList = [{missionId: 1, missionWorkerId: 8, userId: 5, userName: 'r'}
        , {missionId: 1, missionWorkerId: 8, userId: 5, userName: 'r'}
        , {missionId: 1, missionWorkerId: 8, userId: 5, userName: 'r'}];
        console.log(this.mission);
    //     this.routerSubcription = this.route.params.subscribe(params => {
    //         this.id = +params['id']; // (+) converts string 'id' to a number
    //         if (this.id > 0) {
    //             this.missionService.updateMission(this.mission).then(() => {
    //                 alert("Save success");
    //                 this.router.navigate(['/main/manage-mission']);
    //             }).catch(err => {
    //                 debugger
    //                 alert(err);
    //             });
    //         } else {
    //             this.missionService.createMission(this.mission).then(() => {
    //                 //Server trả về role sau khi save
    //                 //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
    //                 alert("Save success");
    //                 this.router.navigate(['/main/manage-mission']);
    //             }).catch(err => {
    //                 debugger
    //                 alert(err);
    //             });
    //         }
    //     });
     }
}