import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Notification } from './shared/notification.model';
import { NotificationComponentService } from './service/notification.component.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
    selector: 'notification-detail',
    templateUrl: './notification-detail.component.html'
})
export class NotificationDetailComponent {

    form: any;
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
        if (this.roleCookie == 2 || this.roleCookie == 3) {
            this.form = new FormGroup({
                notificationId: new FormControl(''),
                notificationName: new FormControl('', [
                    Validators.required
                ]),
                content: new FormControl('', [
                    Validators.required
                ]),
                createDate: new FormControl(''),
                createBy: new FormControl(''),
                updateDate: new FormControl(''),
                updateBy: new FormControl(''),
                status: new FormControl('')
            });
            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number        
                this.notificationComponentService.getList().then((notifications: Notification[]) => {
                    this.notifications = notifications;
                    if (this.id == 0) { this.notification.notificationId = notifications[0].notificationId; }
                });
                if (this.id > 0) {
                    this.title = "You are updating notification";
                    this.notificationComponentService.getNotificationById(this.id).then((res: Notification) => {
                        this.notification = res;
                        this.form.patchValue({
                            notificationId: this.id,
                            notificationName: this.notification.notificationName,
                            content: this.notification.content,
                            updateBy: this.cookieService.get("Auth-UserId"),
                            status: this.notification.status
                        });
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.title = "You are creating new notification";
                    this.form.patchValue({
                        notificationName: this.notification.notificationName,
                        content: this.notification.content,
                        createBy: this.cookieService.get("Auth-UserId"),
                        updateBy: this.cookieService.get("Auth-UserId"),
                    });
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

    get notificationName() {
        return this.form.get('notificationName');
    }

    get content() {
        return this.form.get('content');
    }

    onFormSubmit(notification: Notification) {
        if (this.form.valid) {
            // debugger
            // console.log(notification.content);
            this.save(notification);
        } else {
            alert('Invalid format');
        }
    }

    save(notification: Notification) {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.notification.updateBy = +this.cookieService.get("Auth-UserId");
            this.notification.createBy = +this.cookieService.get("Auth-UserId");
            if (this.id > 0) {
                this.notificationComponentService.updateNotification(notification).then((res: string) => {
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
                this.notificationComponentService.createNotification(notification).then((res: string) => {
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