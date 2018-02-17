import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { UserService } from './service/user.service';
import { User } from './shared/user.model';
import { RoleService } from '../role/service/role.service';
import { Role } from '../role/shared/role.model';
import { LoadingService } from '../service/loading.service';
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
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,
        private roleService: RoleService, private loadingService: LoadingService) {

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
                if (this.id == 0) this.user.RoleId = roles[0].Id;
            });
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa tài khoản";
                this.userService.getUser(this.id).then((res: User) => {
                    this.user = res;                  
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo tài khoản mới";
            }
        });
    }
    save() {
        this.userService.saveUser(this.user).then((res: User) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.user = res;
            alert("Save success");
        }).catch(err => {
            alert(err);
        });
    }
}