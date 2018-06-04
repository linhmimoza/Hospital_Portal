import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationComponentService } from "../notification/service/notification.component.service";
import { LoadingService } from "../extra/loading.service";
import { CookieService } from "ngx-cookie-service";
import { Notification } from "../notification/shared/notification.model";
declare var $: any;

@Component({
    selector: 'portal-detail',
    templateUrl: './portal-detail.component.html',
    styleUrls:['portal-detail.component.css']
})
export class PortalDetailComponent {
    roleCookie: number;
    notification: any;
    notificationName: any;
    updateDate:  Date;
    content: any;
    routerSubcription: any;
    id: number = 0;

    constructor(private route: ActivatedRoute, private router: Router,
        private notificationComponentService: NotificationComponentService,
        private loadingService: LoadingService, private cookieService: CookieService) {

    }
    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if ((this.roleCookie >= 1) && (this.roleCookie <= 6)) {
            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number
                this.notificationComponentService.getNotificationById(this.id).then((res: Notification) => {
                    this.notificationName = res.notificationName;
                    this.updateDate = res.updateDate;
                    this.content = res.content;
                }).catch(err => {
                    console.log(err);
                });
            });

        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/home/main']);
        }
    }
}
