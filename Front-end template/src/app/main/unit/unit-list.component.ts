import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UnitService } from './service/unit.service';
import { Unit } from './shared/unit.model';

@Component({
    selector: 'unit-list',
    templateUrl: './unit-list.component.html'
})
export class UnitListComponent {

    units: Unit[] = [];
    constructor(private router: Router, private unitService: UnitService) {

    }

    ngOnInit() {
        this.unitService.getList().then((res: Unit[]) => {
            this.units = res;
        }).catch(err => {
            alert(err);
        });
    }

    detail(unit: Unit) {
        this.router.navigate(['/main/unit-detail', unit.Id]);
    }
}