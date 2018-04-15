import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './shared/mission.model';
import { MissionService } from './service/mission.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
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
    roleCookie: number;
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
            this.router.navigate(['/main/hospital-portal']);
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
        if (mission.status == 2) {
            mission.status = 3;
        } else {
            mission.status = 2;
        }
        this.missionService.updateMission(mission).then(() => {
            this.notificationService.success('Success');
            this.missionService.activateMission(mission);
            this.reload();
        });
    }

    deny(mission: Mission) {
        mission.status = 3;
        this.missionService.updateMission(mission).then(() => {
            this.notificationService.success('Success');
            this.reload();
        });
    }

    accept(mission: Mission) {
        mission.status = 2;
        this.missionService.updateMission(mission).then(() => {
            this.notificationService.success('Success');
            this.missionService.activateMission(mission);
            this.reload();
        });
    }
}
