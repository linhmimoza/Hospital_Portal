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
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,
        private roleService: RoleService, private departmentService: DepartmentService, private loadingService: LoadingService,
        private notificationService: NotificationService,
        // private formBuilder: FormBuilder
    ) {

        // this.form = formBuilder.group({
        //     userName: ['fdsafa', Validators.required],
        //     fullName: ['', Validators.required],
        //     phone: ['', Validators.required],
        //     email: ['', Validators.required],
        //     sex: ['', Validators.required],
        //     position: ['', Validators.required],
        //     status: ['', Validators.required],
        //     dayOfBirth: ['', Validators.required],
        //     departmentName: ['', Validators.required],
        //     address: ['', Validators.required],
        //     certificate: ['', Validators.required],
        //     roleName: ['', Validators.required]
        // });
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
            sex: new FormControl('', [
                Validators.required
            ]),
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
            ])
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
                console.log(roles);
                if (this.id == 0) this.user.roleId = roles[0].roleId;
            });
            this.departmentService.getList().then((departments: Department[]) => {
                this.departments = departments;
                this.loadingService.stop();
                if (this.id == 0) this.user.departmentId = departments[0].departmentId;
            });
            if (this.id > 0) {
                this.title = "You are updating account";
                this.userService.getUser(this.id).then((res: User) => {
                    this.user = res;
                    this.form.setValue(
                        {
                            userName: this.user.userName,
                            email: this.user.email,
                            fullName: this.user.fullName,
                            sex: this.user.sex,
                            dayOfBirth: this.user.dayOfBirth,
                            address: this.user.address,
                            phone: this.user.phone,
                            certificate: this.user.certificate
                        });
                    console.log(this.form.fullName + "sfilhdkjfka");
                    // this.user.sex = this.user.sex.toString();
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.user.position = "Doctor";
                this.title = "You are creating new account";
            }

        });
    }

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
        return this.form.get('sex').value;
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

    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.userService.updateUser(this.user).then(() => {
                    this.notificationService.success("Success").then(() => {
                        this.router.navigate(['/main/user-list']);
                    });
                }).catch(err => {
                    debugger
                    alert(err);
                });
            } else {
                this.userService.createUser(this.user).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    this.notificationService.success("Success");
                    this.router.navigate(['/main/user-list']);
                }).catch(err => {
                    debugger
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