import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { debug } from 'util';
import { NotificationService } from '../extra/notification.service';
import { LoadingService } from '../extra/loading.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['user-list.component.css']
})
export class UserListComponent {

    users: User[] = [];
    roleCookie: number;

    constructor(private router: Router,
        private userService: UserService, private notificationService: NotificationService,
        private loadingService: LoadingService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 1) {
            $.getScript('https://code.jquery.com/jquery-1.12.4.js', function () {
                $.getScript('https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js', function () {

                });
            });
            $(document).ready(function() {
                $('#example').DataTable( {
                    "pagingType": "full_numbers"
                } );
            } );
            this.loadingService.start();
            this.userService.getList().then((res: User[]) => {
                this.users = res;
                this.loadingService.stop();
                // console.log(this.users);
            }).catch(err => {
                alert(err);
                // this.loadingService.stop();
            });
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }

    }


    ngAfterViewInit() {

    }

    detail(user: User) {
        this.router.navigate(['/main/user-detail', user.userId]);

    }

    switchStatus(user: User) {
        if (user.status == 1) {
            this.userService.deleteUser(user.userId).then(() => {
                this.notificationService.success("Success");
                this.userService.getList().then((res: User[]) => {
                    this.users = res;
                }).catch(err => {
                    alert(err);
                });
            });
        } else {
            this.userService.activeUser(user.userId).then(() => {
                this.notificationService.success("Success");
                this.userService.getList().then((res: User[]) => {
                    this.users = res;
                }).catch(err => {
                    alert(err);
                });
            });
        }
    }
}