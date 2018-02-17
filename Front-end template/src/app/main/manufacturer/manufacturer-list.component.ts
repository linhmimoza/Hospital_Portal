import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManufacturerService } from './service/manufacturer.service';
import { Manufacturer } from './shared/manufacturer.model';

@Component({
    selector: 'manufacturer-list',
    templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent {

    manufacturers: Manufacturer[] = [];
    constructor(private router: Router, private manufacturerService: ManufacturerService) {  }

    ngOnInit() {
        this.manufacturerService.getList().then((res: Manufacturer[]) => {
            this.manufacturers = res;
        }).catch(err => {
            alert(err);
        });
    }


    ngAfterViewInit() {

    }

    detail(manufacturer: Manufacturer) {
        this.router.navigate(['/main/manufacturer-detail', manufacturer.Id]);
    }
}