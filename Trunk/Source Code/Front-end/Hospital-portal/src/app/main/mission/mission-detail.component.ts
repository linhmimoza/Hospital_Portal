import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { MissionService } from './service/mission.service';
import { Mission } from './shared/mission.model';
import { UserService } from '../user/service/user.service';
import { AccountService } from '../account/account.service';
import { User } from '../user/shared/user.model';
import { Select } from '../select/share/select.model';
import { SelectService } from '../select/service/select.service';
import { forEach } from '@angular/router/src/utils/collection';
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'mission-detail',
    templateUrl: './mission-detail.component.html'
})
export class MissionDetailComponent {

    dropdownList: Select[] = [];
    selectedItems = [];
    dropdownSettings = {};
    mission = new Mission();
    routerSubcription: any;
    id = 0;
    title: string;

    member: User[] = [];
    users: Select[] = [];
    userItem: Select;
    missions: Mission[] = [];

    roleCookie: number;
    constructor(private route: ActivatedRoute, private router: Router, private missionService: MissionService
        , private userService: UserService, private selectService: SelectService
        , private accountService: AccountService,
        private cookieService: CookieService) {

    }
    back() {
        this.router.navigate(['/main/manage-mission']);
    }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5) {
            this.loadPage();

            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number
                this.missionService.getList().then((missions: Mission[]) => {
                    this.missions = missions;
                    if (this.id === 0) { this.mission.missionId = 0; }
                });
                if (this.id > 0) {
                    this.title = 'You are updating mission';
                    this.missionService.getMission(this.id).then((res: Mission) => {
                        this.mission = res;
                        this.selectService.userSelect(res.missionWorkerList, this.selectedItems);

                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.title = 'You are creating new mission';
                    this.mission.createby = this.accountService.getUserId();
                    this.mission.updateby = this.accountService.getUserId();
                }
            });
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }

    createMember() {
        this.dropdownSettings = {
            singleSelection: false,
            text: 'Select Employee',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: 'myclass custom-class'
        };
    }
    onItemSelect(item: any) {



    }
    OnItemDeSelect(item: any) {

    }
    onSelectAll(items: any) {

    }
    onDeSelectAll(items: any) {

    }

    loadPage() {
        this.createMember();
        this.loadUser();

    }
    loadUser() {
        this.selectService.getUserForSelect().then((users: Select[]) => {
            this.users = users;
            this.dropdownList = users;
        });

    }
    save() {
        this.mission.missionWorkerList = this.selectService.selectToWorker(this.selectedItems,
            this.mission.missionWorkerList, this.mission.missionId);
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.missionService.updateMission(this.mission).then(() => {
                    alert('Save success');
                    this.router.navigate(['/main/manage-mission']);
                }).catch(err => {
                    //  debugger;
                    alert(err);
                });
            } else {

                this.missionService.createMission(this.mission).then(() => {
                    console.log(this.mission);
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    alert('Save success');
                    this.router.navigate(['/main/manage-mission']);
                }).catch(err => {
                    // debugger;
                    alert(err);
                });
            }
        });
    }
}
