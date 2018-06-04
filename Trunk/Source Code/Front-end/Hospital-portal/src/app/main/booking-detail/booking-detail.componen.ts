import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetail } from './shared/booking-detail.model';
import { BookingDetailService } from './service/booking-detail.service';

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class BookingDetailComponent {

    bookingDetail: BookingDetail;

    constructor(private router: Router,
        private bookingDetailService: BookingDetailService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.bookingDetailService.getBookingDetail(1).then((res: BookingDetail) => {
            this.bookingDetail = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }


    ngAfterViewInit() {

    }

    getBookingDetail(id) {
        this.bookingDetailService.getBookingDetail(id).then((res: BookingDetail) => {
            this.bookingDetail = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }
}