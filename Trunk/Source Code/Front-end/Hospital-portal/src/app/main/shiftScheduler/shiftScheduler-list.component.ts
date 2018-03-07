import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
<<<<<<< HEAD
declare var $: any;
=======

declare var $:any;
>>>>>>> 06fcad47b0e6f3f66f996504852e51a4269d205b
@Component({
    selector: 'shiftScheduler-list',
    templateUrl: './shiftScheduler-list.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class ShiftSchedulerListComponent {

    listShiftScheduler: ShiftScheduler[] = [];

    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.shiftSchedulerService.getList().then((res: ShiftScheduler[]) => {
            this.listShiftScheduler = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
<<<<<<< HEAD

=======
        $( "#TEST" ).draggable({
            
        });
        $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $(this)
            .addClass( "ui-state-highlight" )
            .find( "p" )
                .html( "Dropped!" );
        }
        });
>>>>>>> 06fcad47b0e6f3f66f996504852e51a4269d205b
    }


    ngAfterViewInit() {

 
}


}
