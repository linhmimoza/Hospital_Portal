import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './shared/mission.model';
import { MissionService } from './service/mission.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
import { ShiftDay } from '../shiftScheduler/shared/shiftDay.model';
@Component({
    selector: 'manage-mission',
    templateUrl: './manage-mission.component.html',
    styleUrls: ['manage-mission.component.css']
})
export class ManageMissionComponent {

    popoverTitle: string = 'Are you sure?';
    popoverMessage: string = 'Are you really <b>sure</b> you want to do this?';
    confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
    cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
    confirmDenyText: string = 'Deny <i class="glyphicon glyphicon-ok"></i>';
    confirmAcceptText: string = 'Accept <i class="glyphicon glyphicon-ok"></i>';
    confirmClicked: boolean = false;
    cancelClicked: boolean = false;
    waitingMissions: Mission[] = [];
    checkedMissons: Mission[] = [];
    dupMissions: Mission[] = [];
    roleCookie: number;
    p: number = 1;
    
    constructor(private router: Router,
        private missionService: MissionService, private cookieService: CookieService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie === 2) {
            // this.loadingService.start();
            this.reload();

        } else if (isNaN(this.roleCookie)) {
            alert('You don\'t have permission to view this page!');
            this.router.navigate(['/login']);
        } else {
            alert('You don\'t have permission to view this page!');
            this.router.navigate(['/home/main']);
        }
    }

    reload() {
        this.missionService.getWaitingMissions().then((res: Mission[]) => {
            this.waitingMissions = res;
        }).catch(err => {
            alert(err);
        });
        this.missionService.getCheckedMissions().then((res: Mission[]) => {
            this.checkedMissons = res;
        }).catch(err => {
            alert(err);
        });


    }
    ngAfterViewInit() {

    }

    detail(mission: Mission) {
        this.router.navigate(['/main/mission-detail', mission.missionId]);
    }

    switchStatus(mission: Mission) {
        if (mission.status === 2) {
        this.deny(mission);
        } else {
            this.accept(mission);
        }
    }

    deny(mission: Mission) {
        mission.status = 3;
        this.missionService.updateMission(mission).then(() => {
            this.notificationService.success('Success');
            this.reload();
        });
    }

    accept(mission: Mission) {
        this.missionService.testUser(mission).then((res: Mission[]) => {
            if (res.length > 0) {
                this.notificationService.error(this.missionService.getMessage(res));
            } else {
                this.missionService.testDate(mission).then((rest: ShiftDay[]) => {
                    console.log(rest);
                    if (rest.length > 0) {
                        this.notificationService.error(this.missionService.getMessage2(rest));
                    } else {     mission.status = 2;
                        this.missionService.updateMission(mission).then(() => {
                            this.notificationService.success('Success');
                            this.missionService.activateMission(mission);
                            this.reload();
                        }); }
            });
        }}).catch(err => {
            alert(err);
        });
    }
}
