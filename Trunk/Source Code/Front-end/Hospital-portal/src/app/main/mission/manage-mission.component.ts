import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './shared/mission.model';
import { MissionService } from './service/mission.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
    selector: 'manage-mission',
    templateUrl: './manage-mission.component.html',
    styleUrls:['manage-mission.component.css']
})
export class ManageMissionComponent {

    missions: Mission[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private missionService: MissionService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5) {
            // this.loadingService.start();
            this.missionService.getList().then((res: Mission[]) => {
                this.missions = res;
            }).catch(err => {
                alert(err);
                // this.loadingService.stop();
            });

        }
        else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }


    ngAfterViewInit() {

    }

    detail(mission: Mission) {
        this.router.navigate(['/main/mission-detail', mission.missionId]);
    }

    delete(mission: Mission) {
        // this.departmentService.deleteDepartment(department.departmentId).then(() => {
        // window.location.reload();
        this.router.navigateByUrl('/main/manage-mission');
        // });

    }
}
