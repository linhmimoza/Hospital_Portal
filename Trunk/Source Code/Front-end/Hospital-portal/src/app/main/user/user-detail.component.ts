import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { UserService } from './service/user.service';
import { User } from './shared/user.model';
import { RoleService } from '../role/service/role.service';
import { Role } from '../role/shared/role.model';
import { DepartmentService } from '../department/service/department.service';
import { Department } from '../department/shared/department.model';
import { debug } from 'util';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
    user = new User();
    routerSubcription: any;
    id: number = 0;
    title: string;
    roles: Role[] = [];
    departments: Department[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,
        private roleService: RoleService, private departmentService: DepartmentService) {

    }
    back() {
        this.router.navigate(['/main/user-list']);
    }

    ngOnInit() {
        // this.loadingService.start();
        // this.roleService.getList().then((res: Role[]) => {
        //     this.roles = res;
        //     console.log(this.roles);
        // }).catch(err => {
        //     alert(err);
        // });
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.roleService.getList().then((roles: Role[]) => {
                this.roles = roles;
                // this.loadingService.stop();
                console.log(roles);
                if (this.id == 0) this.user.roleId = roles[0].roleId;
            });
            this.departmentService.getList().then((departments: Department[]) => {
                this.departments = departments;
                if (this.id == 0) this.user.departmentId = departments[0].departmentId;
            });
            if (this.id > 0) {
                this.title = "You are updating account";
                this.userService.getUser(this.id).then((res: User) => {
                    this.user = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "You are creating new account";
            }
        });
    }
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.userService.updateUser(this.user).then(() => {
                    alert("Save success");
                    this.router.navigate(['/main/user-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            } else {
                this.userService.createUser(this.user).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    alert("Save success");
                    this.router.navigate(['/main/user-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            }
        });
    }
}