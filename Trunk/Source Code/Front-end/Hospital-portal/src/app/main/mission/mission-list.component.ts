import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './shared/mission.model';
import { MissionService } from './service/mission.service';
import { AccountService } from '../account/account.service';
@Component({
    selector: 'mission-list',
    templateUrl: './mission-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class MissionListComponent {
    userId: number;
    missions: Mission[] = [];

    constructor(private router: Router,
        private missionService: MissionService,
        private accountService: AccountService) { }

    ngOnInit() {
        this.userId = this.accountService.getUserId();
        // this.loadingService.start();
        this.missionService.getByUser(this.userId).then((res: Mission[]) => {
            this.missions = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });

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