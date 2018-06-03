import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { AccountService } from '../account/account.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'upload-shiftSchedule',
    templateUrl: './upload-shiftSchedule.component.html'
    // styleUrls: ['user-list.component.css']
})
export class UploadShiftScheduleComponent {
    userId: number;
    schedulers: ShiftScheduler[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService,
        private accountService: AccountService,
        private cookieService: CookieService) { }
        ngOnInit() {
            this.roleCookie = +this.cookieService.get('Auth-RoleId');
            if (this.roleCookie === 2 || this.roleCookie === 3 || this.roleCookie === 5 || this.roleCookie === 1 ||
                this.roleCookie === 4 || this.roleCookie === 6) {
                this.userId = this.accountService.getUserId();
                // this.loadingService.start();
                this.shiftSchedulerService.getListByUpload(this.userId).then((res: ShiftScheduler[]) => {
                    this.schedulers = res;
                }).catch(err => {
                    alert(err);
                    // this.loadingService.stop();
                });
            } else if (isNaN(this.roleCookie)) {
                alert('You don\'t have permission to view this page!');
                this.router.navigate(['/login']);
            } else {
                alert('You don\'t have permission to view this page!');
                this.router.navigate(['/home/main']);
            }
            console.log(this.accountService.getRoleId());
        }

}
