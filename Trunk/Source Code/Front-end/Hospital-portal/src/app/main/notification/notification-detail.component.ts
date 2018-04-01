import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Notification } from './shared/notification.model';
import { NotificationComponentService } from './service/notification.component.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';

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
    roleCookie: number;
    responseText: string;
    constructor(private route: ActivatedRoute, private router: Router,
        private notificationComponentService: NotificationComponentService, private cookieService: CookieService,
        private notificationService: NotificationService) {
    }

    back() {
        this.router.navigate(['/main/notification-list']);
    }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5) {
            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number        
                this.notificationComponentService.getList().then((notifications: Notification[]) => {
                    this.notifications = notifications;
                    if (this.id == 0) this.notification.notificationId = notifications[0].notificationId;
                });
                if (this.id > 0) {
                    this.title = "You are updating notification";
                    this.notificationComponentService.getNotificationById(this.id).then((res: Notification) => {
                        this.notification = res;
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.title = "You are creating new notification";
                }
            });
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.notification.updateBy = +this.cookieService.get("Auth-UserId");
            this.notification.createBy = +this.cookieService.get("Auth-UserId");
            if (this.id > 0) {
                this.notificationComponentService.updateNotification(this.notification).then((res: string) => {
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then((res) => {
                            this.router.navigate(['/main/notification-list']);
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
                    alert(err);
                });
            } else {
                this.notificationComponentService.createNotification(this.notification).then((res: string) => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then((res) => {
                            this.router.navigate(['/main/notification-list']);
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
                    debugger
                    alert(err);
                });
            }
        });
    }
}