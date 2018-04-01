import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { ManageService } from './service/shiftSchedulerManage.service';
import { ShiftSchedulerManager } from './shared/ShiftSchedulerManager.model';

@Component({
    selector: 'manage-shiftSchedule',
    templateUrl: './manage-shiftSchedule.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class ManageShiftSchedulerComponent {
    selected: ShiftSchedulerManager;
    thisWeek: any;
    weekDate: String;
    listManage: ShiftSchedulerManager[] ;
    constructor( private shiftSchedulerService: ShiftSchedulerService,
    private router: Router, private manageService: ManageService) {}
    ngOnInit() {
   this.loadPage();
    }
    loadPage() {
        this.thisWeek = this.shiftSchedulerService.getThisWeek();
        this.weekDate = this.shiftSchedulerService.weekToDate(this.thisWeek);
        this.shiftSchedulerService.getListManager().then((res: ShiftSchedulerManager[]) => {
            res = this.shiftSchedulerService.setListManager(res);
            this.listManage = res;
            console.log(res);
        }).catch(err => {
            alert(err);
        });
    }
view(manage: ShiftSchedulerManager) {
    if (manage.checked > 0) {
        this.manageService.setSelect(manage);
    this.router.navigate(['/main/shiftScheduler-list']);
    }

}
}
