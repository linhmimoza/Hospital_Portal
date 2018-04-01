import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from './shared/notification.model';
import { NotificationComponentService } from './service/notification.component.service';
import { LoadingService } from '../extra/loading.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['notification-list.component.css']
})
export class NotificationListComponent {

    notifications: Notification[] = [];
    roleCookie: number;
    constructor(private router: Router, private notificationService: NotificationComponentService,
        private loadingService: LoadingService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5) {
            this.loadingService.start();
            this.notificationService.getList().then((res: Notification[]) => {
                this.notifications = res;
            }).catch(err => {
                alert(err);
            });
            this.loadingService.stop();
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }

    }

    ngAfterViewInit() {

    }

    detail(notification: Notification) {
        this.router.navigate(['/main/notification-detail', notification.notificationId]);
    }

    // delete(notification: Notification) {
    //     // this.departmentService.deleteDepartment(department.departmentId).then(() => {
    //         // window.location.reload();
    //         this.router.navigateByUrl('/main/notification-list');
    //     // });

    // }

    switchStatus(){
        
    }
}