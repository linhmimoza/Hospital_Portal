import { Component } from '@angular/core';
import { User } from '../user/shared/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user/service/user.service';

@Component({
    selector: 'employee-check',
    templateUrl: './employee-check.component.html'
})
export class EmployeeCheckComponent {
    users: User[] = [];
    checked: boolean[] = [];
    checkedUser: User [] = [];
    constructor(private router: Router, private userService: UserService) {

    }

    ngOnInit() {
        this.userService.getList().then((res: User[]) => {
            this.users = res;;
        }).catch(err => {
            alert(err);
        });
    }

    OK() {
        console.log(this.checkedUser);
    }

    updateChecked(user, event) {
        this.checked[user] = event; // or `event.target.value` not sure what this event looks like
        this.checkedUser.push(user);
    }
}