import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './shared/mission.model';
import { MissionService } from './service/mission.service';
@Component({
    selector: 'manage-mission',
    templateUrl: './manage-mission.component.html'
    // styleUrls:['user-list.component.css']
})
export class ManageMissionComponent {

    missions: Mission[] = [];

    constructor(private router: Router,
        private missionService: MissionService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.missionService.getList().then((res: Mission[]) => {
            this.missions = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
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
