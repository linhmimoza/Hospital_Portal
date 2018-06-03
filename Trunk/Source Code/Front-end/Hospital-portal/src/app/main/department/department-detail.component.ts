import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { DepartmentService } from './service/department.service';
import { Department } from './shared/department.model';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../user/service/user.service';
import { User } from '../user/shared/user.model';

@Component({
    selector: 'department-detail',
    templateUrl: './department-detail.component.html'
})
export class DepartmentDetailComponent {
    form: any;
    department = new Department();
    routerSubcription: any;
    id: number = 0;
    title: string;
    departments: Department[] = [];
    roleCookie: number;
    responseText: string;
    users: User[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService,
        private cookieService: CookieService, private notificationService: NotificationService, private userService: UserService) {

    }
    back() {
        this.router.navigate(['/main/department-list']);
    }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 1) {
            this.form = new FormGroup({
                departmentId: new FormControl(''),
                departmentName: new FormControl('', [
                    Validators.required
                ]),
                description: new FormControl(''),
                code: new FormControl('', [
                    Validators.required
                ]),
                quantity: new FormControl(''),
                status: new FormControl('')
            });

            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number        
                this.departmentService.getList().then((departments: Department[]) => {
                    this.departments = departments;
                    if (this.id === 0) { this.department.departmentId = departments[0].departmentId; }
                });
                if (this.id > 0) {
                    this.title = "You are updating department";
                    this.userService.loadUsersByDept(this.id).then((res: User[]) => {
                        this.users = res;
                    })
                    this.departmentService.getDepartment(this.id).then((res: Department) => {
                        this.department = res;
                        this.form.patchValue({
                            departmentId: this.id,
                            departmentName: this.department.departmentName,
                            description: this.department.description,
                            code: this.department.code,
                            quantity: this.department.quantity,
                            status: this.department.status
                        });
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.title = "You are creating new department";
                }
            });
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/home/main']);
        }
    }

    get departmentName() {
        return this.form.get("departmentName");
    }

    get code() {
        return this.form.get("code");
    }

    get description() {
        return this.form.get("description");
    }

    onFormSubmit(department: Department) {
        if (this.form.valid) {
            console.log(department);
            this.save(department);
        } else {
            alert('Invalid format');
        }
    }

    save(department: Department) {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.departmentService.updateDepartment(department).then((res: string) => {
                    this.responseText = res;
                    if (this.responseText === 'Success') {
                        this.notificationService.success(this.responseText).then((res) => {
                            this.router.navigate(['/main/department-list']);
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
                    alert(err);
                });
            } else {
                this.departmentService.createDepartment(department).then((res: string) => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then((res) => {
                            this.router.navigate(['/main/department-list']);
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
             
                    alert(err);
                });
            }
        });
    }
}