import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from './shared/notification.model';
import { NotificationComponentService } from './service/notification.component.service';
import { LoadingService } from '../extra/loading.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';

@Component({
    selector: 'notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['notification-list.component.css']
})
export class NotificationListComponent {

    popoverTitle: string = 'Are you sure?';
    popoverMessage: string = 'Are you really <b>sure</b> you want to do this?';
    confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
    cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
    confirmClicked: boolean = false;
    cancelClicked: boolean = false;

    notifications: Notification[] = [];
    roleCookie: number;
    constructor(private router: Router, private notificationComponentService: NotificationComponentService,
        private notificationService: NotificationService,
        private loadingService: LoadingService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3) {
            this.loadingService.start();
            this.notificationComponentService.getList().then((res: Notification[]) => {
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
            this.router.navigate(['/home/main']);
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

    switchStatus(notification: Notification) {
        if (notification.status == 1) {
            notification.status = 2;
        } else {
            notification.status = 1;
        }
        this.notificationComponentService.updateNotification(notification).then(() => {
            this.notificationService.success("Success");
            this.notificationComponentService.getList().then((res: Notification[]) => {
                this.notifications = res;
            }).catch(err => {
                alert(err);
            });
        });
    }

    ngOnDestroy() {

    }
}