import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UnitService } from './service/unit.service';
import { Unit } from './shared/unit.model';

@Component({
    selector: 'unit-detail',
    templateUrl: './unit-detail.component.html'
})
export class UnitDetailComponent {
    unit = new Unit;
    id: number = 0;
    title: string;
    routerSubcription: any;
    constructor(private route: ActivatedRoute, private router: Router, private unitService: UnitService) {
    }

    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa đơn vị";
                this.unitService.getUnit(this.id).then((res: Unit) => {
                    this.unit = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới đơn vị";
            }

        });
    }

    save() {
        this.unitService.saveUnit(this.unit).then((res: Unit) => {
            if (this.id == 0) {
                this.router.navigate(['/main/unit-detail', res.Id]);
            }
        }).catch(err => {
            alert(err);
        });
    }
    back() {
        this.router.navigate(['/main/unit-list']);
    }
}