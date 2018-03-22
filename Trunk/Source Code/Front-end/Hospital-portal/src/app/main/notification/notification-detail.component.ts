import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { NotificationService } from './service/notification.service';
import { Notification } from './shared/notification.model';

@Component({
    selector: 'notification-detail',
    templateUrl: './notification-detail.component.html'
})
export class NotificationDetailComponent {
    notification = new Notification();
    routerSubcription: any;
    id: number = 0;
    title: string;
    notifications: Notification[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private notificationService: NotificationService) {

    }

    back() {
        this.router.navigate(['/main/notification-list']);
    }

    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number        
            this.notificationService.getList().then((notifications: Notification[]) => {
                this.notifications = notifications;
                if (this.id == 0) this.notification.notificationId = notifications[0].notificationId;
            });
            // if (this.id > 0) {
            //     this.title = "You are updating notification";
            //     this.notificationService.getDepartment(this.id).then((res: Notification) => {
            //         this.notification = res;
            //     }).catch(err => {
            //         console.log(err);
            //     });
            // } else {
            //     this.title = "You are creating new notification";
            // }
        });
    }
    // save() {
    //     this.routerSubcription = this.route.params.subscribe(params => {
    //         this.id = +params['id']; // (+) converts string 'id' to a number
    //         if (this.id > 0) {
    //             this.notificationService.updateNotification(this.notification).then(() => {
    //                 alert("Save success");
    //                 this.router.navigate(['/main/notification-list']);
    //             }).catch(err => {
    //                 debugger
    //                 alert(err);
    //             });
    //         } else {
    //             this.notificationService.createNotification(this.notification).then(() => {
    //                 //Server trả về role sau khi save
    //                 //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
    //                 alert("Save success");
    //                 this.router.navigate(['/main/notification-list']);
    //             }).catch(err => {
    //                 debugger
    //                 alert(err);
    //             });
    //         }
    //     });
    // }
}