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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../extra/notification.service';


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
    form: any;
    responseText: string;

    constructor(private route: ActivatedRoute, private router: Router, private missionService: MissionService
        , private userService: UserService, private selectService: SelectService
        , private accountService: AccountService,
        private cookieService: CookieService,
        private notificationService: NotificationService) {

    }

    back() {
        if (this.roleCookie === 2) {
            this.router.navigate(['/main/manage-mission']);
        } else {
            this.router.navigate(['/main/manageMission-Scheduler']);
        }
    }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3) {
            this.form = new FormGroup({
                missionId: new FormControl(''),
                startDate: new FormControl('', [
                    Validators.required
                ]),
                endDate: new FormControl('', [
                    Validators.required
                ]),
                place: new FormControl('', [
                    Validators.required
                ]),
                content: new FormControl('', [
                    Validators.required
                ]),
                note: new FormControl(''),
                status: new FormControl(''),
                createby: new FormControl(''),
                createDate: new FormControl(''),
                updateby: new FormControl(''),
                updateDate: new FormControl(''),
                missionWorkerList: new FormControl('', [
                    Validators.required
                ])
            });
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
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
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
    onItemSelect(item: any) { }
    OnItemDeSelect(item: any) { }
    onSelectAll(items: any) { }
    onDeSelectAll(items: any) { }

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
                this.mission.status = 1;
                this.missionService.updateMission(this.mission).then((res: string) => {
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then(() => {
                            if (this.roleCookie === 2) {
                                this.router.navigate(['/main/manage-mission']);
                            } else {
                                this.router.navigate(['/main/manageMission-Scheduler']);
                            }
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
                    //  debugger;
                    alert(err);
                });
            } else {
                this.missionService.createMission(this.mission).then((res: string) => {
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then(() => {
                            if (this.roleCookie === 2) {
                                this.router.navigate(['/main/manage-mission']);
                            } else {
                                this.router.navigate(['/main/manageMission-Scheduler']);
                            }
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
                    // debugger;
                    alert(err);
                });
            }
        });
    }
}
