import { Component } from '@angular/core';
import { InOut } from './shared/in-out.model';
import { InOutService } from './service/in-out.service';
import { Router } from '@angular/router';

@Component({
    selector: 'in-out-list',
    templateUrl: './in-out-list.component.html'
})
export class InOutListComponent {
    inOuts: InOut[] = [];
    constructor(private router: Router, private inOutService: InOutService) {

    }

    ngOnInit() {
        this.inOutService.getList().then((res: InOut[]) => {
            this.inOuts = res;
        }).catch(err => {
            console.log(err);
        });
    }

    detail(inOut: InOut) {
        this.router.navigate(['/main/in-out-detail', inOut.Id]);
    }
}