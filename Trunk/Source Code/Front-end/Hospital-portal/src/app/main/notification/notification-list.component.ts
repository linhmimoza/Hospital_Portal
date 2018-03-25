import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from './shared/notification.model';
import { NotificationService } from './service/notification.service';

@Component({
    selector: 'notification-list',
    templateUrl: './notification-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class NotificationListComponent {

    notifications: Notification[] = [];

    constructor(private router: Router, private notificationService: NotificationService) { }

    // ngOnInit() {
    //     // this.loadingService.start();
    //     this.notificationService.getList().then((res: Notification[]) => {
    //         this.notifications = res;
    //     }).catch(err => {
    //         alert(err);
    //         // this.loadingService.stop();
    //     });
    // }

    // ngAfterViewInit() {

    // }

    // detail(notification: Notification) {
    //     this.router.navigate(['/main/notification-detail', notification.notificationId]);
    // }

    // delete(notification: Notification) {
    //     // this.departmentService.deleteDepartment(department.departmentId).then(() => {
    //         // window.location.reload();
    //         this.router.navigateByUrl('/main/notification-list');
    //     // });

    // }
}