import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { MissionService } from './service/mission.service';
import { Mission } from './shared/mission.model';

@Component({
    selector: 'mission-detail',
    templateUrl: './mission-detail.component.html'
})
export class MissionDetailComponent {
    mission = new Mission();
    routerSubcription: any;
    id: number = 0;
    title: string;
    missions: Mission[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private missionService: MissionService) {

    }
    back() {
        this.router.navigate(['/main/mission-list']);
    }

    ngOnInit() {
        // this.loadingService.start();
        // this.roleService.getList().then((res: Role[]) => {
        //     this.roles = res;
        //     console.log(this.roles);
        // }).catch(err => {
        //     alert(err);
        // });
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number        
            this.missionService.getList().then((missions: Mission[]) => {
                this.missions = missions;
                if (this.id == 0) this.mission.missionId = missions[0].missionId;
            });
            if (this.id > 0) {
                this.title = "You are updating mission";
                this.missionService.getMission(this.id).then((res: Mission) => {
                    this.mission = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "You are creating new mission";
            }
        });
    }
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.missionService.updateMission(this.mission).then(() => {
                    alert("Save success");
                    this.router.navigate(['/main/mission-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            } else {
                this.missionService.createMission(this.mission).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    alert("Save success");
                    this.router.navigate(['/main/mission-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            }
        });
    }
}