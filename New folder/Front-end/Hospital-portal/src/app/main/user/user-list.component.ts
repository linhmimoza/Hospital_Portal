import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { debug } from 'util';
import { NotificationService } from '../extra/notification.service';
import { LoadingService } from '../extra/loading.service';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['user-list.component.css']
})
export class UserListComponent {

    users: User[] = [];

    constructor(private router: Router,
        private userService: UserService, private notificationService: NotificationService,
        private loadingService: LoadingService) { }

    ngOnInit() {
        this.loadingService.start();
        this.userService.getList().then((res: User[]) => {
            this.users = res;
            this.loadingService.stop();
            // console.log(this.users);
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }


    ngAfterViewInit() {

    }

    detail(user: User) {
        this.router.navigate(['/main/user-detail', user.userId]);

    }

    delete(user: User) {
        this.userService.deleteUser(user.userId).then(() => {
            this.notificationService.success("Success");
            // window.location.reload();
            this.userService.getList().then((res: User[]) => {
                this.users = res;
                // console.log(this.users);
            }).catch(err => {
                alert(err);
                // this.loadingService.stop();
            });
        });
    }
}