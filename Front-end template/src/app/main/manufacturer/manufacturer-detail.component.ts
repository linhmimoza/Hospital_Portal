import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Manufacturer } from './shared/manufacturer.model';
import { ManufacturerService } from './service/manufacturer.service';

@Component({
    selector: 'manufacturer-detail',
    templateUrl: './manufacturer-detail.component.html'
})
export class ManufacturereDetailComponent {
    manufacturer = new Manufacturer();
    routerSubcription: any;
    id: number = 0;
    title: string;
    constructor(private route: ActivatedRoute, private router: Router, private manufacturerService: ManufacturerService) {
    }

    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa nhà sản xuất";
                this.manufacturerService.getManufacturer(this.id).then((res: Manufacturer) => {
                    this.manufacturer = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới nhà sản xuất";
            }
        });
    }
    save() {
        this.manufacturerService.saveManufacturer(this.manufacturer).then((res: Manufacturer) => {
            if (this.id == 0) {
                this.router.navigate(['/main/manufacturer-detail/',res.Id]);
            }
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/manufacturer-list']);
    }
}