import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './shared/mission.model';
import { MissionService } from './service/mission.service';
import { AccountService } from '../account/account.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
    selector: 'mission-list',
    templateUrl: './mission-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class MissionListComponent {
    userId: number;
    missions: Mission[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private missionService: MissionService,
        private accountService: AccountService,
        private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5 || this.roleCookie == 1 ||
            this.roleCookie == 4 || this.roleCookie == 6) {
            this.userId = this.accountService.getUserId();
            // this.loadingService.start();
            this.missionService.getByUser(this.userId).then((res: Mission[]) => {
                this.missions = res;
            }).catch(err => {
                alert(err);
                // this.loadingService.stop();
            });
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
        console.log(this.accountService.getRoleId());
    }


    ngAfterViewInit() {

    }

    detail(mission: Mission) {
        this.router.navigate(['/main/mission-detail', mission.missionId]);
    }

    delete(mission: Mission) {
        // this.departmentService.deleteDepartment(department.departmentId).then(() => {
        // window.location.reload();
        this.router.navigateByUrl('/main/mission-list');
        // });

    }
}