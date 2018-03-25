import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { UserService } from './service/user.service';
import { User } from './shared/user.model';
import { RoleService } from '../role/service/role.service';
import { Role } from '../role/shared/role.model';
import { DepartmentService } from '../department/service/department.service';
import { Department } from '../department/shared/department.model';
import { LoadingService } from '../extra/loading.service';
import { NotificationService } from '../extra/notification.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from './user-detail.validate';
declare var $: any;

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
    form: any;
    user = new User;
    routerSubcription: any;
    id: number = 0;
    title: string;
    roles: Role[] = [];
    departments: Department[] = [];
    response: string;
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,
        private roleService: RoleService, private departmentService: DepartmentService, private loadingService: LoadingService,
        private notificationService: NotificationService) {

    }

    back() {
        this.router.navigate(['/main/user-list']);
    }

    ngOnInit() {
        this.form = new FormGroup({
            userName: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                forbiddenNameValidator(/bob/i)
            ]),
            email: new FormControl('', [
                Validators.required
            ]),
            fullName: new FormControl('', [
                Validators.required
            ]),
            sex: new FormControl(),
            dayOfBirth: new FormControl('', [
                Validators.required
            ]),
            phone: new FormControl('', [
                Validators.required
            ]),
            address: new FormControl('', [
                Validators.required
            ]),
            certificate: new FormControl('', [
                Validators.required
            ]),
            departmentId: new FormControl(''),
            roleId: new FormControl(''),
            status: new FormControl(''),
            position: new FormControl(''),
            userId: new FormControl('')
        });
        this.loadingService.start();
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
                if (this.id == 0) {
                    this.form.patchValue({
                        roleId: roles[0].roleId
                    });
                }
            });
            this.departmentService.getList().then((departments: Department[]) => {
                this.departments = departments;
                this.loadingService.stop();
                if (this.id == 0) {
                    this.form.patchValue({
                        departmentId: departments[0].departmentId
                    });
                }
            });
            if (this.id > 0) {
                this.title = "You are updating account";
                this.userService.getUser(this.id).then((res: User) => {
                    this.user = res;
                    this.form.patchValue(
                        {
                            userName: this.user.userName,
                            email: this.user.email,
                            fullName: this.user.fullName,
                            sex: this.user.sex,
                            dayOfBirth: this.user.dayOfBirth,
                            address: this.user.address,
                            phone: this.user.phone,
                            certificate: this.user.certificate,
                            departmentId: this.user.departmentId,
                            roleId: this.user.roleId,
                            status: this.user.status,
                            position: this.user.position,
                            userId: this.user.userId
                        });
                    // this.user.sex = this.user.sex.toString();
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.user.position = "Doctor";
                this.title = "You are creating new account";
                this.form.patchValue(
                    {
                        position: 'Doctor',
                        sex: 'Male'
                    });
            }

        });
    }

    // Check validity of form control, write a method for a form control
    // HTML template we can access validity state as userName.invalid
    get userName() {
        return this.form.get('userName');
    }

    get email() {
        return this.form.get('email');
    }

    get fullName() {
        return this.form.get('fullName');
    }

    get sex() {
        return this.form.get('sex');
    }

    get dayOfBirth() {
        return this.form.get('dayOfBirth');
    }

    get phone() {
        return this.form.get('phone');
    }

    get address() {
        return this.form.get('address');
    }

    get certificate() {
        return this.form.get('certificate');
    }

    get departmentId() {
        return this.form.get('departmentId');
    }

    get roleId() {
        return this.form.get('roldId');
    }

    get position() {
        return this.form.get('position');
    }

    onFormSubmit(user: User) {
        if (this.form.valid) {
            console.log(user);
            this.save(user);
        } else {
            alert('Invalid format');
        }
    }

    save(user: User) {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.userService.updateUser(user).then((res: string) => {
                    this.response = res;
                    console.log(this.response);
                    // this.notificationService.success("Success").then(() => {
                    //     this.router.navigate(['/main/user-list']);
                    // });
                }).catch(err => {
                    alert(err);
                });
            } else {
                this.userService.createUser(user).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    this.notificationService.success("Success");
                    this.router.navigate(['/main/user-list']);
                }).catch(err => {
                    alert(err);
                });
            }
        });
    }

    ngAfterViewInit() {
        $.getScript("assets/porto/javascripts/theme.init.js", function () {
            $.getScript("assets/porto/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js", function () {

            });
        });
    }
}