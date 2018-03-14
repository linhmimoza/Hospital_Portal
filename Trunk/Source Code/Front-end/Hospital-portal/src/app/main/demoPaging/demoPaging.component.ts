import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'demoPaging',
    templateUrl: './demoPaging.component.html'
})

export class DemoPagingComponent {

    constructor(private router: Router) {

    }

    ngAfterViewInit() {
        // Lazy load js
        $.getScript("assets/porto/javascripts/tables/examples.datatables.default.js", function () {
            $.getScript("assets/porto/javascripts/tables/examples.datatables.row.with.details.js", function () {
                $.getScript("assets/porto/javascripts/tables/examples.datatables.tabletools.js", function () {

                });
            });
        });
    }
}