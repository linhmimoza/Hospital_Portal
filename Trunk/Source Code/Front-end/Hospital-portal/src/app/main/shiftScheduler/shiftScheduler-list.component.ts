import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
@Component({
    selector: 'shiftScheduler-list',
    templateUrl: './shiftScheduler-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class ShiftSchedulerListComponent {

    listShiftScheduler: ShiftScheduler[] = [];

    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.shiftSchedulerService.getList().then((res: ShiftScheduler[]) => {
            this.listShiftScheduler = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }


    ngAfterViewInit() {

    }


}
